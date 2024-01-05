import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  MOBILE_BREAKPOINT,
  MOBILE_RADIUS,
  TABLET_BREAKPOINT,
  TABLET_RADIUS,
  whiteThemeColorWhite,
} from '../../constants/styles.constants';

export const modalStyles = () => ({
  mask: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(181, 181, 181, 0.80)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  root: {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 384,
    backgroundColor: whiteThemeColorWhite,
    borderRadius: DESKTOP_RADIUS,
    padding: '40px 32px',
    zIndex: 2,
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    marginBottom: 32,
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      borderRadius: TABLET_RADIUS,
      padding: '30px 22px',
    },
    header: {
      top: 16,
      right: 16,
    },
    title: {
      marginBottom: 24,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      borderRadius: MOBILE_RADIUS,
    },
    title: {
      marginBottom: 16,
    },
  },
});

export const useModalStyles = createUseStyles(modalStyles, { name: 'Modal' });
