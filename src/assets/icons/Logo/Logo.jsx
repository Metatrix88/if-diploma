import React from 'react';
import classNames from 'classnames';

import { useLogoStyles } from './Logo.styles';

export const Logo = ({ className }) => {
  const classes = useLogoStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#logo" />
    </svg>
  );
};
