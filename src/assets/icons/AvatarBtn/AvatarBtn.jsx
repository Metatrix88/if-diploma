import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

// styles
import { useAvatarBtnStyles } from './AvatarBtn.styles';

export const AvatarBtn = ({ className }) => {
  const classes = useAvatarBtnStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#avatar" />
    </svg>
  );
};

AvatarBtn.propTypes = {
  className: string,
};
