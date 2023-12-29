import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  whiteThemeColorSecondaryBlue,
  whiteThemeColorSecondaryGray,
  whiteThemeColorWhite,
} from '../../constants/styles.constatnts';

export const searchStyles = (theme) => ({
  root: {
    position: 'relative',
    maxWidth: 500,
    width: '100%',
  },
  wrapper: {
    alignItems: 'center',
    border: `2px solid ${whiteThemeColorSecondaryGray}`,
    borderRadius: DESKTOP_RADIUS,
    display: 'flex',
    height: 48,
    overflow: 'hidden',
    backgroundColor: whiteThemeColorWhite,

    '&:hover, &:focus-within': {
      borderColor: theme.palette.accent.hover,
    },
  },
  submit: {
    padding: '15px 16px',

    '&:hover': {
      backgroundColor: whiteThemeColorSecondaryBlue,
    },
  },
  input: {
    flexGrow: 1,
    fontSize: 16,
    height: '100%',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    root: {
      maxWidth: 400,
    },
    wrapper: {
      height: 46,
    },
    submit: {
      padding: '13px 16px',
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      maxWidth: 300,
    },
    wrapper: {
      height: 40,
    },
    submit: {
      padding: '10px 16px',
    },
    input: {
      fontSize: 14,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      maxWidth: 150,
    },
    wrapper: {
      height: 36,
    },
    submit: {
      padding: '10px 8px',
    },
  },
});

export const useSearchStyles = createUseStyles(searchStyles, {
  name: 'Search',
});
