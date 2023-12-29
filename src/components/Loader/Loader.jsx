import React from 'react';

import loadingImg from '../../assets/images/loading/loading.gif';

import { useLoaderStyles } from './Loader.styles';

export const Loader = () => {
  const classes = useLoaderStyles();
  return (
    <div className={classes.root}>
      <img className={classes.images} src={loadingImg} alt="loading..." />
    </div>
  );
};
