import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT, MOBILE_RADIUS,
  TABLET_BREAKPOINT, TABLET_RADIUS,
  whiteThemeColorSecondaryBlue,
} from '../../constants/styles.constants';

export const startPageStyles = () => ({
  wrapMain: {
    display: 'flex',
    backgroundColor: whiteThemeColorSecondaryBlue,
    padding: '68px 80px',
    borderRadius: DESKTOP_RADIUS,
  },
  content: {
    paddingTop: 32,
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
      borderRadius: TABLET_RADIUS,
    },
    content: {
      paddingTop: 20,
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
      borderRadius: MOBILE_RADIUS,
    },
    title: {
      marginBottom: 16,
    },
    content: {
      paddingTop: 0,
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

export const useStartPageStyles = createUseStyles(startPageStyles, { name: 'StartPage' });
