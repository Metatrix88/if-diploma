import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

// styles
import { useArrowIconStyles } from './Arrow.styles';

export const Arrow = ({ className, direction }) => {
  const classes = useArrowIconStyles();
  return (
    <>
      {direction === 'up' ? (
        <svg className={classNames(classes.root, className)}>
          <use href="#arrowUp" />
        </svg>
      ) : (
        <svg className={classNames(classes.root, className)}>
          <use href="#arrowDown" />
        </svg>
      )}
    </>
  );
};

Arrow.propTypes = {
  className: string,
  direction: string,
};
