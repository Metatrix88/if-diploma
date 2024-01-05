import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

//styles
import { useImagesStyles } from './Image.styles';

export const Image = ({ imageURL, name, className }) => {
  const classes = useImagesStyles();
  return (
    <img
      className={classNames(classes.root, className)}
      src={imageURL}
      alt={name}
    />
  );
};

Image.prorTypes = {
  imageUrl: string,
  name: string,
  className: string,
};
