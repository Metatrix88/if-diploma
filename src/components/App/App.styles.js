import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/styles.constants';

export const appStyles = () => ({
  main: {
    marginBottom: 80,
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    main: {
      marginBottom: 60,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    main: {
      marginBottom: 40,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    main: {
      marginBottom: 24,
    },
  },
});

export const useAppStyles = createUseStyles(appStyles, {
  name: 'App',
});
