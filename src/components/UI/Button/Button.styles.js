import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  MOBILE_RADIUS,
  TABLET_BREAKPOINT,
  TABLET_RADIUS,
} from '../../../constants/styles.constants';

export const buttonStyles = (theme) => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,

    '&$icon': {
      backgroundColor: 'transparent',
      width: 'auto',
    },
    '&$text': {
      fontWeight: 700,
      color: theme.palette.buttons.text,
      padding: 0,
      width: 'auto',
      backgroundColor: 'transparent',
    },
    '&$contained': {
      borderRadius: DESKTOP_RADIUS,
      height: 48,
      lineHeight: '1.16',
    },
    '&$primary': {
      backgroundColor: theme.palette.buttons.outlined,
      color: theme.palette.text.textBtn,
    },
  },
  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {},

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      fontSize: 18,

      '&$contained': {
        borderRadius: TABLET_RADIUS,
        height: 36,
      },
    },
    contained: {},
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      fontSize: 14,

      '&$contained': {
        borderRadius: MOBILE_RADIUS,
        height: 32,
      },
    },
    contained: {},
  },
  outlined: {},
  primary: {},
  icon: {},
  contained: {},
  text: {},
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: 'Button',
});
