import React, { useEffect, useId, useState } from 'react';
import DatePicker from 'react-datepicker';
import { parse, isValid } from 'date-fns';
import { useDispatch } from 'react-redux';

// constants
import { LOCAL_STORAGE_KEY_USERDATA } from '../../constants/localStorageUtils';

// helpers
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../assets/helpers/localStorage';

// components
import { Button } from '../../components/UI/Button';

// icons
import { Avatar } from '../../assets/icons';

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
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState('');
  const [newBirthdate, setNewBirthdate] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const userDataFromLocalStorage = getDataFromLocalStorage(
      LOCAL_STORAGE_KEY_USERDATA,
    );
    if (userDataFromLocalStorage) {
      const { username, birthdate, email, imageData } =
        userDataFromLocalStorage;
      setNewUserName(username);
      setNewBirthdate(parse(birthdate, 'dd/MM/yyyy', new Date()));
      setNewEmail(email);
      setSelectedFile(imageData);
    }
  }, []);

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

  const handleDateChange = (date) => {
    if (isValid(date)) {
      setNewBirthdate(date);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 110;
          canvas.height = 110;
          ctx.drawImage(img, 0, 0, 110, 110);

          const compressedImageBase64 = canvas.toDataURL('image/jpeg');
          setSelectedFile(compressedImageBase64);
        };
      };
      reader.readAsDataURL(file);
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

    const { password } = getDataFromLocalStorage(LOCAL_STORAGE_KEY_USERDATA);

    if (getPassword === password) {
      dispatch(
        setUser({
          email: getEmail,
          password: getNewPassword,
          username: getUsername,
          birthdate: getBirthdate,
          imageData: selectedFile,
        }),
      );

      if (getUsername || getBirthdate || getEmail || getNewPassword) {
        const userData = {
          isAuthenticated: true,
          username: getUsername,
          birthdate: getBirthdate,
          email: getEmail,
          password: getNewPassword,
          imageData: selectedFile,
        };

        saveDataToLocalStorage(LOCAL_STORAGE_KEY_USERDATA, userData);
      }
    } else {
      alert('You entered the wrong password!');
    }
  };

  return (
    <section className={classes.root}>
      <h5 className={classes.title}>Settings</h5>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.avatar}>
          {selectedFile ? (
            <img
              src={selectedFile}
              alt="Uploaded Avatar"
              className={classes.image}
            />
          ) : (
            <Avatar />
          )}
        </div>
        <label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          <Button
            variant="contained"
            size="smallContained"
            color="secondaryContained"
            className={classes.loadingPhotoBtn}
            onClick={() => document.getElementById('fileInput').click()}
          >
            Change photo
          </Button>
        </label>
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
          onChange={(date) => handleDateChange(date)}
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
          value={newEmail}
          onChange={handleChange}
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
          value={oldPassword}
          onChange={handleChange}
          type="password"
          name="oldPassword"
          placeholder="Your password"
          required
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
          required
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
    </section>
  );
};
