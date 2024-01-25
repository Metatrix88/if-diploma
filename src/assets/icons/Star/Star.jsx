import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

// styles
import { useStarIconStyles } from './Star.styles';

export const Star = ({ className }) => {
  const theme = useTheme();
  const classes = useStarIconStyles({ theme });
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#star" />
    </svg>
  );
};
