import React, {forwardRef, useId} from 'react';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useSingUpModalStyles} from './SingUpModal.styles';

// eslint-disable-next-line react/display-name
export const SingUpModal = forwardRef((_, ref) => {
  const classes = useSingUpModalStyles();
  const username = useId();
  const birthdate = useId();
  const email = useId();
  const password = useId();

  return (
    <Modal ref={ref} title="Welcome to Fox Library">
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
        <label className={classes.label} htmlFor={birthdate}>
          Your birthdate
        </label>
        <input
          className={classes.textField}
          id={birthdate}
          type="number"
          placeholder="Your birthdate"
        />
        <label className={classes.label} htmlFor={email}>
          Email
        </label>
        <input
          className={classes.textField}
          id={email}
          type="email"
          placeholder="Email"
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
          Sing Up
        </Button>
      </form>
    </Modal>
  );
});
