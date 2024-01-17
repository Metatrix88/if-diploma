import React, { forwardRef, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { func } from 'prop-types';

// constants
import { PATH } from '../../constants/paths';
import { authStatuses } from '../../constants/authStatuses';

// hooks
import { useAuth } from '../../hooks/use-auth';

// slices
import { setStatus } from '../../store/slices/auth.slice';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useLogInModalStyles } from './LogInModal.styles';

// eslint-disable-next-line react/display-name
export const LogInModal = forwardRef(({ onCloseModal }, ref) => {
  const classes = useLogInModalStyles();
  const usernameId = useId();
  const passwordId = useId();
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, email } = useAuth();

  const handleChange = (event) => {
    if (event.target.name === 'username') {
      setEnteredUserName(event.target.value);
    }
    if (event.target.name === 'password') {
      setEnteredPassword(event.target.value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, enteredPassword)
      .then(() => {
        if (username === enteredUserName) {
          dispatch(setStatus(authStatuses.loggedIn));
          navigate(PATH.allBooks);
          onCloseModal();
        } else alert('Invalid user name!');
      })
      .catch(() => alert('Invalid password!'));
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
          value={enteredUserName}
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
          value={enteredPassword}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button
          variant="contained"
          color="primaryContained"
          size="mediumContained"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Modal>
  );
});

LogInModal.propTypes = {
  onCloseModal: func,
};
