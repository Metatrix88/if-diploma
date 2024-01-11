import React, { forwardRef, useId, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useLogInModalStyles } from './LogInModal.styles';
import { useAuth } from '../../hooks/use-auth';
// import { setUser } from '../../store/slices/user.slice';

// eslint-disable-next-line react/display-name
export const LogInModal = forwardRef((_, ref) => {
  const classes = useLogInModalStyles();
  const usernameId = useId();
  const passwordId = useId();
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  // const dispatch = useDispatch();
  const { password, email } = useAuth();

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
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        // dispatch(
        //   setUser({
        //     email: user.email,
        //     token: user.accessToken,
        //     id: user.uid,
        //   }),
        // );
      })
      .catch(console.error);
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
