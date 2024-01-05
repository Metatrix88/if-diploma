import React from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import { string } from 'prop-types';

// styles
import { useCloseStyles } from './Close.styles';

export const Close = ({ className }) => {
  const theme = useTheme();
  const classes = useCloseStyles({ theme });
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#close" />
    </svg>
  );
};

Close.propTypes = {
  className: string,
};
