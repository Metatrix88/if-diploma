import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// constants
import { PATH } from '../../constants/paths';
import { themeVariants } from '../../constants/themeVariants';
import { authStatuses } from '../../constants/authStatuses';
import { LOCAL_STORAGE_KEY_USERDATA } from '../../constants/localStorageUtils';

// helpers
import { clearDataFromLocalStorage } from '../../assets/helpers/localStorage';

// components
import { Container } from '../Container';
import { Search } from '../Search';
import { Button } from '../UI/Button';
import { LogInModal } from '../LogInModal';
import { SingUpModal } from '../SingUpModal';

// icons
import { Arrow, AvatarBtn, Logo, Night } from '../../assets/icons';

// slices
import { setVariant } from '../../store/slices/themes.slice';
import { removeUser } from '../../store/slices/user.slice';
import { setStatus } from '../../store/slices/auth.slice';

// hooks
import { useAuth } from '../../hooks/use-auth';

// styles
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
  const classes = useHeaderStyles();
  const isAuth = useSelector((state) => state.auth.status);
  const themeMode = useSelector((state) => state.themes.variant);
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const { username } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logInRef = useRef(null);
  const singUpRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChangeThemes = () => {
    dispatch(
      setVariant(
        themeMode === themeVariants.whiteTheme
          ? themeVariants.darkTheme
          : themeVariants.whiteTheme,
      ),
    );
  };

  const handleOpenSetting = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    dispatch(setStatus(authStatuses.loggedOut));
    clearDataFromLocalStorage(LOCAL_STORAGE_KEY_USERDATA);
    navigate(PATH.index);
  };

  const handleClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Container className={classes.root}>
        <div className={classes.wrapperSearch}>
          <Link to={PATH.index} className={classes.logo}>
            <Logo />
          </Link>
          <Search />
        </div>
        <div className={classes.wrapperButtons}>
          <Button onClick={handleChangeThemes} aria-label="Screen Theme Switch">
            <Night />
          </Button>
          {isAuth === authStatuses.loggedIn ? (
            <Button size="mediumText" color="mainText">
              All books
            </Button>
          ) : (
            <Button
              size="largeText"
              color="secondaryText"
              onClick={() => logInRef.current.open()}
              aria-label="Log In"
            >
              Log in
            </Button>
          )}
          {isAuth === authStatuses.loggedIn ? (
            <Button size="mediumText" color="mainText" aria-label="Your orders">
              Your orders
            </Button>
          ) : (
            <Button
              size="largeText"
              color="secondaryText"
              onClick={() => singUpRef.current.open()}
              aria-label="Sing Up"
            >
              Sing up
            </Button>
          )}
          {isAuth === authStatuses.loggedIn && (
            <div className={classes.wrapperSettingBtn} ref={dropdownRef}>
              <Button
                className={classes.settingsBtn}
                aria-label="Your account"
                onClick={handleOpenSetting}
              >
                <AvatarBtn className={classes.avatar} />
                <Arrow
                  direction={isDropDownOpen ? 'up' : 'down'}
                  className={classes.arrow}
                />
              </Button>
              {isDropDownOpen && (
                <div className={classes.dropDown}>
                  <p className={classes.username}>{username}</p>
                  <NavLink className={classes.setting} to={PATH.settings}>
                    Settings
                  </NavLink>
                  <NavLink className={classes.orders}>My orders</NavLink>
                  <Button
                    className={classes.logOut}
                    color="accentText"
                    size="mediumSecondaryText"
                    onClick={handleLogout}
                  >
                    Log out
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
      <LogInModal
        ref={logInRef}
        onCloseModal={() => logInRef.current.close()}
      />
      <SingUpModal
        ref={singUpRef}
        onSwitchModal={() => logInRef.current.open()}
        onCloseModal={() => singUpRef.current.close()}
      />
    </>
  );
};
