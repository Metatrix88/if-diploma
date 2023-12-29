import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/styles.constatnts';

export const containerStyles = () => ({
  container: {
    maxWidth: 1440,
    padding: '0 105px',
    width: '100%',
    margin: '0 auto',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    container: {
      maxWidth: 1280,
      padding: '0 55px',
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    container: {
      maxWidth: 1024,
      padding: '0 55px',
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    container: {
      maxWidth: 766,
      padding: '0 16px',
    },
  },
});

export const useContainerStyles = createUseStyles(containerStyles, {
  name: 'Container',
});
