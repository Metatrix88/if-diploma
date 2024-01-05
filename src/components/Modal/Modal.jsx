import React from 'react';
import { func, node, string } from 'prop-types';

// components
import { Button } from '../UI/Button';
import { Close } from '../../assets/icons';

// styles
import { useModalStyles } from './Modal.styles';

export const Modal = ({ title, children, onClose }) => {
  const classes = useModalStyles();
  return (
    <>
      <div className={classes.mask} onClick={onClose} />
      <div className={classes.root}>
        <div className={classes.header}>
          <Button variant="icon" onClick={onClose}>
            <Close />
          </Button>
        </div>
        <h4 className={classes.title}>{title}</h4>
        <div>{children}</div>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: string,
  children: node,
  onClose: func,
};
