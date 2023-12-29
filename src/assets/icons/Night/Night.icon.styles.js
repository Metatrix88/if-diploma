import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../../constants/styles.constatnts';

export const nightIconStyles = (theme) => ({
  root: {
    fill: theme.palette.icons.main,
    width: 40,
    aspectRatio: '1/1',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    root: {
      width: 30,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      width: 28,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      width: 24,
    },
  },
});

export const useNightIconStyles = createUseStyles(nightIconStyles, {
  name: 'NightIcon',
});
