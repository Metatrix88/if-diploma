import React from 'react';

import imageMain from '../../assets/images/mainImage/mainImage.png';

// components
import { Container } from '../Container';
import { Button } from '../UI/Button';

//styles
import { useMainStyles } from './Main.styles';

export const Main = () => {
  const classes = useMainStyles();
  return (
    <Container>
      <div className={classes.wrapMain}>
        <div>
          <h1 className={classes.visuallyHidden}>
            Search for books, online-books, online library
          </h1>
          <h2 className={classes.title}>BIld your library</h2>
          <h3 className={classes.textInfo}>
            Over 400.000 books from&nbsp;fiction&nbsp;to the
            business&nbsp;literature
          </h3>
          <Button className={classes.button} variant="contained" color="primary">
            Let’s start
          </Button>
        </div>
        <img className={classes.image} src={imageMain} alt="main image"></img>
      </div>
    </Container>
  );
};
