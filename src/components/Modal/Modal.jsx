import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { func, node, string } from 'prop-types';

// components
import { Button } from '../UI/Button';
import { Close } from '../../assets/icons';

// styles
import { useModalStyles } from './Modal.styles';

// eslint-disable-next-line react/display-name
export const Modal = forwardRef(({ title, children }, ref) => {
  const classes = useModalStyles();
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    },
    close: closeModal,
  }));

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  };

  return (
    showModal &&
    createPortal(
      <>
        <div className={classes.mask} onClick={closeModal} />
        <div className={classes.root}>
          <div className={classes.header}>
            <Button variant="icon" onClick={closeModal}>
              <Close />
            </Button>
          </div>
          <h4 className={classes.title}>{title}</h4>
          <div>{children}</div>
        </div>
      </>,
      document.body,
    )
  );
});

Modal.propTypes = {
  title: string,
  children: node,
  onClose: func,
};
