import React, {forwardRef, useId} from 'react';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useLogInModalStyles } from './LogInModal.styles';

// eslint-disable-next-line react/display-name
export const LogInModal = forwardRef((_, ref) => {
  const classes = useLogInModalStyles();
  const username = useId();
  const password = useId();

  return (
    <Modal ref={ref} title="Log In to Fox Library">
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
        <Button className={classes.btn} variant="outlined" color="primary" >
          Log In
        </Button>
      </form>
    </Modal>
  );
});
