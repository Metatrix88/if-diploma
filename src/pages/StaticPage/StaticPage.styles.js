import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  whiteThemeColorBlack,
  whiteThemeColorSecondaryBlue,
} from '../../constants/styles.constants';

export const staticPageStyles = () => ({
  root: {
    padding: '150px 16px',
    textAlign: 'center',
    backgroundColor: whiteThemeColorSecondaryBlue,
  },
  title: {
    marginBottom: 50,
    fontSize: 32,
  },
  text: {
    marginBottom: 16,
    color: whiteThemeColorBlack,
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {},

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      padding: '55px 16px',
    },
    title: {
      marginBottom: 40,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      padding: '45px 16px',
    },
    title: {
      marginBottom: 32,
    },
  },
});

export const useStaticPage = createUseStyles(staticPageStyles, {
  name: 'StaticPage',
});
