import React, { forwardRef, useId, useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useLogInModalStyles } from './LogInModal.styles';

// eslint-disable-next-line react/display-name
export const LogInModal = forwardRef((_, ref) => {
  const classes = useLogInModalStyles();
  const usernameId = useId();
  const passwordId = useId();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.name === 'username') {
      setUserName(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch();
  };

  return (
    <Modal ref={ref} title="Log In to Fox Library">
      <form className={classes.root} onSubmit={handleLogin}>
        <label className={classes.label} htmlFor={usernameId}>
          Username
        </label>
        <input
          className={classes.textField}
          id={usernameId}
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Your username"
        />
        <label className={classes.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={classes.textField}
          id={passwordId}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Modal>
  );
});
