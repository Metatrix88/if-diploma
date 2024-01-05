import React, { useId } from 'react';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useLogInModalStyles } from './LogInModal.styles';

export const LogInModal = ({ onClose }) => {
  const classes = useLogInModalStyles();
  const username = useId();
  const password = useId();

  return (
    <Modal onClose={onClose} title="Log In to Fox Library">
      <form className={classes.root}>
        <label className={classes.label} htmlFor={username}>
          Username
        </label>
        <input
          className={classes.textField}
          id={username}
          type="text"
          placeholder="Your username"
        />
        <label className={classes.label} htmlFor={password}>
          Password
        </label>
        <input
          className={classes.textField}
          id={password}
          type="password"
          placeholder="Password"
        />
        <Button variant="outlined" color="primary" className={classes.btn}>
          Log In
        </Button>
      </form>
    </Modal>
  );
};
