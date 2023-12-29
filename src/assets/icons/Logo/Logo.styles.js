import { createUseStyles } from 'react-jss';
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from '../../../constants/styles.constatnts';

export const logoStyles = (theme) => ({
  root: {
    width: 172,
    height: 32,
    fill: theme.palette.icons.main,
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      width: 150,
      height: 32,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      width: 80,
      height: 24,
    },
  },
});

export const useLogoStyles = createUseStyles(logoStyles, {
  name: 'Logo',
});
