import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// constants
import { PATH } from '../../constants/paths';
import { themeVariants } from '../../constants/themeVariants';

// components
import { Container } from '../Container';
import { Search } from '../Search';
import { Button } from '../UI/Button';

// icons
import { Logo, Night } from '../../assets/icons';

// slices
import { setVariant } from '../../store/slices/themes.slice';

// styles
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
  const classes = useHeaderStyles();
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.themes.variant);

  const handleChangeThemes = () => {
    dispatch(
      setVariant(
        themeMode === themeVariants.whiteTheme
          ? themeVariants.darkTheme
          : themeVariants.whiteTheme,
      ),
    );
  };

  return (
    <Container className={classes.root}>
      <Link to={PATH.index}>
        <Logo />
      </Link>
      <Search />
      <div className={classes.buttons}>
        <Button onClick={handleChangeThemes} aria-label="Screen Theme Switch">
          <Night />
        </Button>
        <Button variant="text" className={classes.buttonFirstPage}>
          Log in
        </Button>
        <Button variant="text" className={classes.buttonFirstPage}>
          Sing up
        </Button>
      </div>
    </Container>
  );
};