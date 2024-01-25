import React from 'react';
import {node, string} from 'prop-types';
import classNames from 'classnames';

// styles
import { useContainerStyles } from './Container.styles';

export const Container = ({ children, className }) => {
  const classes = useContainerStyles();
  return (
    <section className={classNames(classes.container, className)}>
      {children}
    </section>
  );
};

Container.propTypes = {
  children: node.isRequired,
  className: string,
};
