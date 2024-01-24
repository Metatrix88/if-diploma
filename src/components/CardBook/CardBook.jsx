import React from 'react';
import {NavLink} from 'react-router-dom';

// components
import {Button} from '../UI/Button';

// styles
import {useCardBookStyles} from './CardBook.styles';

export const CardBook = ({title, imageUrl, author}) => {
  const classes = useCardBookStyles();
  return (
    <li className={classes.wrapperCard}>
      <NavLink to="#">
        <div className={classes.card}>
          <img
            src={imageUrl}
            alt={title}
            className={classes.image}
          />
          <div className={classes .bookInfo}>
            <div className={classes.status}>Taken</div>
            <h6 className={classes.name}>{title}</h6>
            <p className={classes.author}>{author}</p>
            <Button
              variant="contained"
              size="smallContained"
              color="secondaryContained"
              className={classes.button}
            >
              Order
            </Button>
          </div>
        </div>
      </NavLink>
    </li>
  );
};