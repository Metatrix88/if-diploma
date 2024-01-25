import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// constants
import { authStatuses } from '../../constants/authStatuses';

// components
import { Header } from '../Header';
import { Container } from '../Container';
import { Footer } from '../Footer';

// styles
import { useAppStyles } from './App.styles';

export const App = () => {
  const classes = useAppStyles();
  const isAuth = useSelector((state) => state.auth.status);

  return (
    <>
      <Header />
      <Container className={classes.main}>
        <Outlet />
      </Container>
      {isAuth === authStatuses.loggedIn && <Footer />}
    </>
  );
};
