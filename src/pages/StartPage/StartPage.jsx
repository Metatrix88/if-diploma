import React from 'react';

// images
import imageMain from '../../assets/images/mainImage/mainImage.png';

// components
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Button } from '../../components/UI/Button';

//styles
import { useStartPageStyles } from './StartPage.styles';

export const StartPage = () => {
  const classes = useStartPageStyles();
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
              color="primary"
            >
              Let’s start
            </Button>
          </div>
          <img className={classes.image} src={imageMain} alt="main image"></img>
        </div>
      </Container>
    </>
  );
};
