import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

// styles
import { useAvatarStyles } from './Avatar.styles';

export const Avatar = ({ className }) => {
  const classes = useAvatarStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#avatarIcon" />
    </svg>
  );
};

Avatar.propTypes = {
  className: string,
};
