import React from 'react';
import classNames from 'classnames';

//styles
import {useImagesStyles} from './Image.styles';

export const Image = ({ imageURL, name, className}) => {
  const classes = useImagesStyles();
  return (
    <img
      className={classNames(classes.root, className)}
      src={imageURL}
      alt={name}
    />
  );
};