import React, { forwardRef, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { func } from 'prop-types';
import DatePicker from 'react-datepicker';

// slices
import { setUser } from '../../store/slices/user.slice';

// constants
import { LOCAL_STORAGE_KEY_USERDATA } from '../../constants/localStorageUtils';

// helpers
import { saveDataToLocalStorage } from '../../assets/helpers/localStorage';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useSingUpModalStyles } from './SingUpModal.styles';

// eslint-disable-next-line react/display-name
export const SingUpModal = forwardRef(
  ({ onSwitchModal, onCloseModal }, ref) => {
    const classes = useSingUpModalStyles();
    const usernameId = useId();
    const birthdateId = useId();
    const emailId = useId();
    const passwordId = useId();
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const username = formData.get('username');
      const birthdate = formData.get('birthdate');
      const email = formData.get('email');
      const password = formData.get('password');

      if (username && birthdate && email && password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
            dispatch(
              setUser({
                email: user.email,
                password: password,
                token: user.accessToken,
                id: user.uid,
                username: username,
                birthdate: birthdate,
              }),
            );
          })
          .catch(console.error);

        const userData = {
          isAuthenticated: true,
          username: username,
          birthdate: birthdate,
          email: email,
          password: password,
        };

        saveDataToLocalStorage(LOCAL_STORAGE_KEY_USERDATA, userData);
      } else {
        alert('Please fill in all fields');
      }
      setSelectedDate(null);
      onSwitchModal();
      onCloseModal();
    };
    return (
      <>
        <Modal ref={ref} title="Welcome to Fox Library">
          <form className={classes.root} onSubmit={handleSubmit}>
            <label className={classes.label} htmlFor={usernameId}>
              Username
            </label>
            <input
              className={classes.textField}
              id={usernameId}
              type="text"
              name="username"
              placeholder="Your username"
              required
            />
            <label className={classes.label} htmlFor={birthdateId}>
              Your birthdate
            </label>
            <DatePicker
              className={`${classes.textField} ${classes.inputDate}`}
              id={birthdateId}
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              isClearable
              showIcon
              name="birthdate"
              placeholderText="Your birthdate"
              autoComplete="off"
              required
            />
            <label className={classes.label} htmlFor={emailId}>
              Email
            </label>
            <input
              className={classes.textField}
              id={emailId}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <label className={classes.label} htmlFor={passwordId}>
              Password
            </label>
            <input
              className={classes.textField}
              id={passwordId}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Button
              variant="contained"
              color="primaryContained"
              size="mediumContained"
              type="submit"
            >
              Sing Up
            </Button>
          </form>
        </Modal>
      </>
    );
  },
);

SingUpModal.propTypes = {
  onSwitchModal: func,
  onCloseModal: func,
};
