import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

// styles
import { useInstagramIconStyles } from './Instagram.styles';

export const Instagram = ({ className }) => {
  const theme = useTheme();
  const classes = useInstagramIconStyles({ theme });
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#instagram" />
    </svg>
  );
};
