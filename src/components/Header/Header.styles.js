import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/styles.constatnts';

export const headerStyles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    gap: 16,
  },
  buttons: {
    display: 'flex',
    gap: 48,
  },
  buttonFirstPage: {
    whiteSpace: 'nowrap',
    fontSize: 20,

    '&:hover, &:focus': {
      color: theme.palette.accent.hover,
    },
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    buttonFirstPage: {
      fontSize: 18,
    },
    buttons: {
      gap: 40,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    buttonFirstPage: {
      fontSize: 16,
    },
    buttons: {
      gap: 30,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      gap: 8,
    },
    buttonFirstPage: {
      fontSize: 14,
    },
    buttons: {
      gap: 8,
    },
  },
});

export const useHeaderStyles = createUseStyles(headerStyles, {
  name: 'Header',
});
