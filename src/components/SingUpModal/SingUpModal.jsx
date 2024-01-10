import React, { forwardRef, useId } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// hooks
import { useAuth } from '../../hooks/use-auth';

// slices
import { setUser } from '../../store/slices/user.slice';

// components
import { Modal } from '../Modal';
import { Button } from '../UI/Button';

// styles
import { useSingUpModalStyles } from './SingUpModal.styles';

// eslint-disable-next-line react/display-name
export const SingUpModal = forwardRef((_, ref) => {
  const classes = useSingUpModalStyles();
  const usernameId = useId();
  const birthdateId = useId();
  const emailId = useId();
  const passwordId = useId();
  // const [username, setUserName] = useState('');
  // const [birthdate, setBirthdate] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   if (event.target.name === 'username') {
  //     setUserName(event.target.value);
  //   }
  //   if (event.target.name === 'birthdate') {
  //     setBirthdate(event.target.value);
  //   }
  //   if (event.target.name === 'email') {
  //     setEmail(event.target.value);
  //   }
  //   if (event.target.name === 'password') {
  //     setPassword(event.target.value);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const birthdate = formData.get('birthdate');
    const email = formData.get('email');
    const password = formData.get('password');
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)

    if (username && birthdate && email && password) {
      dispatch(
        setUser({
          username: username,
          birthdate: birthdate,
          email: email,
          password: password,
        }),
      );
    }
  };
  console.log(1, useAuth());
  return (
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
          // value={username}
          // onChange={handleChange}
          placeholder="Your username"
        />
        <label className={classes.label} htmlFor={birthdateId}>
          Your birthdate
        </label>
        <input
          className={classes.textField}
          id={birthdateId}
          type="text"
          name="birthdate"
          // value={birthdate}
          // onChange={handleChange}
          placeholder="Your birthdate"
        />
        <label className={classes.label} htmlFor={emailId}>
          Email
        </label>
        <input
          className={classes.textField}
          id={emailId}
          type="email"
          name="email"
          // value={email}
          // onChange={handleChange}
          placeholder="Email"
        />
        <label className={classes.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={classes.textField}
          id={passwordId}
          type="password"
          name="password"
          // value={password}
          // onChange={handleChange}
          placeholder="Password"
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
  );
});
