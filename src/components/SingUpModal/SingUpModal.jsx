import React, { forwardRef, useId } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { func } from 'prop-types';

// slices
import { setUser } from '../../store/slices/user.slice';

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

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const username = formData.get('username');
      const birthdate = formData.get('birthdate');
      const email = formData.get('email');
      const password = formData.get('password');

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              token: user.accessToken,
              id: user.uid,
            }),
          );
        })
        .catch(console.error);

      if (username && birthdate && email && password) {
        const userData = {
          username: username,
          birthdate: birthdate,
          email: email,
          password: password,
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        dispatch(
          setUser({
            username: username,
            birthdate: birthdate,
            password: password,
          }),
        );
      }
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
            <input
              className={classes.textField}
              id={birthdateId}
              type="text"
              name="birthdate"
              placeholder="Your birthdate"
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
              className={classes.btn}
              variant="contained"
              color="primary"
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
