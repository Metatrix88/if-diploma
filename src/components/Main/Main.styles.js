import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  whiteThemeColorSecondaryBlue,
} from '../../constants/styles.constants';

export const mainStyles = () => ({
  wrapMain: {
    display: 'flex',
    backgroundColor: whiteThemeColorSecondaryBlue,
    padding: '68px 80px',
  },
  visuallyHidden: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
    margin: -1,
    border: 0,
    padding: 0,
  },
  title: {
    marginBottom: 40,
  },
  textInfo: {
    marginBottom: 40,
  },
  button: {
    maxWidth: 185,
  },
  image: {
    display: 'block',
    width: '100%',
    maxWidth: 670,
    height: 'auto',
  },
  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    wrapMain: {
      padding: 50,
    },
    image: {
      maxWidth: 550,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    wrapMain: {
      padding: '24px 8px',
    },
    title: {
      marginBottom: 28,
    },
    textInfo: {
      marginBottom: 28,
    },
    button: {
      maxWidth: 140,
    },
    image: {
      maxWidth: 420,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    wrapMain: {
      padding: '16px 8px',
    },
    title: {
      marginBottom: 16,
    },
    textInfo: {
      marginBottom: 16,
    },
    button: {
      maxWidth: 100,
    },
    image: {
      maxWidth: 230,
    },
  },
});

export const useMainStyles = createUseStyles(mainStyles, { name: 'Main' });
