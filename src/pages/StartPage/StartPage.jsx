import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// images
import imageMain from '../../assets/images/mainImage/mainImage.png';

// constants
import { PATH } from '../../constants/paths';
import { authStatuses } from '../../constants/authStatuses';

// slices
import { setStatus } from '../../store/slices/auth.slice';

// components
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Button } from '../../components/UI/Button';
import { SingUpModal } from '../../components/SingUpModal';

//styles
import { useStartPageStyles } from './StartPage.styles';

export const StartPage = () => {
  const classes = useStartPageStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singUpRef = useRef(null);

  const handleClick = () => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.isAuthenticated) {
      dispatch(setStatus(authStatuses.loggedIn));
      navigate(PATH.allBooks);
    } else {
      singUpRef.current.open();
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div className={classes.wrapMain}>
          <div className={classes.content}>
            <h1 className={classes.visuallyHidden}>
              Search for books, online-books, online library
            </h1>
            <h2 className={classes.title}>BIld your library</h2>
            <h3 className={classes.textInfo}>
              Over 400.000 books from&nbsp;fiction&nbsp;to the
              business&nbsp;literature
            </h3>
            <Button
              className={classes.button}
              variant="contained"
              color="primaryContained"
              size="largeContained"
              onClick={handleClick}
            >
              Let’s start
            </Button>
          </div>
          <img className={classes.image} src={imageMain} alt="main image"></img>
        </div>
      </Container>
      <SingUpModal ref={singUpRef} />
    </>
  );
};
