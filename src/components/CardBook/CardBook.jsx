import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

// icons
import { Star } from '../../assets/icons';

// components
import { Button } from '../UI/Button';

// styles
import { useCardBookStyles } from './CardBook.styles';

export const CardBook = ({ title, imageUrl, author }) => {
  const classes = useCardBookStyles();
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    const randomStars = Math.floor(Math.random() * 6);
    setFilledStars(randomStars);
  }, []);

  const handleClick = () => {
    console.log('Andrey');
  };

  return (
    <li className={classes.root}>
      <NavLink to="#">
        <div className={classes.card}>
          <img src={imageUrl} alt={title} className={classes.image} />
          <div className={classes.bookInfo}>
            <div className={classes.status}>Taken</div>
            <p className={classes.holder}>Bookholder: cris11</p>
            <h6 className={classes.name}>{title}</h6>
            <p className={classes.author}>{`by ${author}`}</p>
            <div className={classes.rating}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`${classes.star} ${
                    index < filledStars ? classes.filled : ''
                  }`}
                />
              ))}
            </div>
            <Button
              variant="contained"
              size="smallContained"
              color="secondaryContained"
              className={classes.button}
              onClick={handleClick}
            >
              Order
            </Button>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

CardBook.propTypes = {
  title: string,
  imageUrl: string,
  author: string,
};
