import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

// styles
import { useButtonStyles } from './Button.styles';
import { useTheme } from 'react-jss';

export const Button = ({
  variant,
  color,
  size,
  type = 'button',
  className,
  children,
  ...props
}) => {
  const theme = useTheme();
  const classes = useButtonStyles({ theme });

  const variants = {
    [classes.contained]: variant === 'contained',
    [classes.icon]: variant === 'icon',
    [classes.counter]: variant === 'counter',
    [classes.outlined]: variant === 'outlined',
  };

  const colors = {
    [classes.primaryContained]: color === 'primaryContained',
    [classes.secondaryContained]: color === 'secondaryContained',
    [classes.mainText]: color === 'mainText',
    [classes.secondaryText]: color === 'secondaryText',
    [classes.accentText]: color === 'accentText',
  };

  const sizes = {
    [classes.smallContained]: size === 'smallContained',
    [classes.mediumContained]: size === 'mediumContained',
    [classes.largeContained]: size === 'largeContained',
    [classes.mediumText]: size === 'mediumText',
    [classes.largeText]: size === 'largeText',
    [classes.mediumSecondaryText]: size === 'mediumSecondaryText',
  };

  return (
    <button
      className={classNames(classes.root, className, {
        ...colors,
        ...sizes,
        ...variants,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: string,
  color: string,
  size: string,
  className: string,
  type: string,
  children: node,
};
