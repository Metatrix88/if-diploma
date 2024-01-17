import React, { useId, useState } from 'react';
import DatePicker from 'react-datepicker';
import { parse, isValid } from 'date-fns';
import { useDispatch } from 'react-redux';

// components
import { Header } from '../../components/Header';
import { Button } from '../../components/UI/Button';

// icons
import { Avatar } from '../../assets/icons';

// hooks
import { useAuth } from '../../hooks/use-auth';

// slices
import { setUser } from '../../store/slices/user.slice';

// styles
import { useSettingsStyles } from './Settings.styles';

export const Settings = () => {
  const classes = useSettingsStyles();
  const usernameId = useId();
  const birthdateId = useId();
  const emailId = useId();
  const passwordId = useId();
  const newPasswordId = useId();
  const { username, birthdate, email, password } = useAuth();

  const [newUserName, setNewUserName] = useState(`${username}`);
  const [newBirthdate, setNewBirthdate] = useState(
    parse(birthdate, 'dd/MM/yyyy', new Date()));
  const [newEmail, setNewEmail] = useState(`${email}`);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setNewUserName(value);
    }
    if (name === 'email') {
      setNewEmail(value);
    }
    if (name === 'oldPassword') {
      setOldPassword(value);
    }
    if (name === 'newPassword') {
      setNewPassword(value);
    }
  };

  const handleChangeDate = (date) => {
    if (isValid(date)) {
      setNewBirthdate(date);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const getUsername = formData.get('username');
    const getBirthdate = formData.get('birthdate');
    const getEmail = formData.get('email');
    const getPassword = formData.get('oldPassword');
    const getNewPassword = formData.get('newPassword');

    if (getPassword === password) {
      dispatch(
        setUser({
          email: getEmail,
          password: getNewPassword,
          username: getUsername,
          birthdate: getBirthdate,
        }),
      );

      if (getUsername && getBirthdate && getEmail && getNewPassword) {
        const userData = {
          isAuthenticated: true,
          username: getUsername,
          birthdate: getBirthdate,
          email: getEmail,
          password: getNewPassword,
        };

        localStorage.setItem('userData', JSON.stringify(userData));
      }
    } else {
      alert('You entered the wrong password!');
    }
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        <h5 className={classes.title}>Settings</h5>
        <div className={classes.avatar}>
          <Avatar />
        </div>
        <Button
          variant="contained"
          size="smallContained"
          color="secondaryContained"
          className={classes.loadingPhotoBtn}
        >
          Change photo
        </Button>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className={classes.label} htmlFor={usernameId}>
            Username
          </label>
          <input
            className={classes.textField}
            id={usernameId}
            type="text"
            name="username"
            value={newUserName}
            onChange={handleChange}
            placeholder="Your username"
            required
          />
          <label className={classes.label} htmlFor={birthdateId}>
            Your birthdate
          </label>
          <DatePicker
            className={`${classes.textField} ${classes.inputDate}`}
            id={birthdateId}
            selected={newBirthdate}
            onChange={(date) => handleChangeDate(date)}
            dateFormat="dd/MM/yyyy"
            isClearable
            showIcon
            name="birthdate"
            placeholderText="Your birthdate"
            autoComplete="off"
            // required
          />
          <label className={classes.label} htmlFor={emailId}>
            Email
          </label>
          <input
            className={classes.textField}
            id={emailId}
            value={newEmail}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            // required
          />
          <label className={classes.label} htmlFor={passwordId}>
            Password
          </label>
          <input
            className={classes.textField}
            id={passwordId}
            value={oldPassword}
            onChange={handleChange}
            type="password"
            name="oldPassword"
            placeholder="Your password"
            // required
          />
          <label className={classes.label} htmlFor={newPasswordId}>
            New password
          </label>
          <input
            className={classes.textField}
            id={newPasswordId}
            value={newPassword}
            onChange={handleChange}
            type="password"
            name="newPassword"
            placeholder="New password"
            // required
          />
          <Button
            className={classes.saveBtn}
            variant="contained"
            color="primaryContained"
            size="smallContained"
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
    </>
  );
};
