import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

// styles
import { useFacebookIconStyles } from './Facebook.styles';

export const Facebook = ({ className }) => {
  const theme = useTheme();
  const classes = useFacebookIconStyles({ theme });
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#facebook" />
    </svg>
  );
};
