import React from 'react';
import classNames from 'classnames';

// styles
import { useSearchIconStyles } from './Search.styles';

export const Search = ({ className }) => {
  const classes = useSearchIconStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#search" />
    </svg>
  );
};
