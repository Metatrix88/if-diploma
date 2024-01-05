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
    '&$outlined': {
      borderRadius: DESKTOP_RADIUS,
      height: 48,
      width: '100%',
      fontSize: 20,
      lineHeight: '1.16',
    },
    '&$primary': {
      backgroundColor: theme.palette.buttons.outlined,
      color: theme.palette.text.textBtn,
    },

    // '&$counter': {
    //   width: 30,
    //   height: 30,
    //   border: `1px solid ${theme.palette.border.secondary}`,
    //   fontSize: 18,
    //   fontWeight: 400,
    //
    //   '&:disabled': {
    //     border: '1px solid rgba(206, 206, 206, 1)',
    //     color: 'rgba(206, 206, 206, 1)',
    //   },
    // },
  },
  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {},

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      '&$outlined': {
        borderRadius: TABLET_RADIUS,
        height: 36,
        fontSize: 18,
      },
    },
    outlined: {},
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      '&$outlined': {
        borderRadius: MOBILE_RADIUS,
        height: 32,
        fontSize: 14,
      },
    },
    outlined: {},
  },
  outlined: {},
  primary: {},
  icon: {},
  counter: {},
  text: {},
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: 'Button',
});
