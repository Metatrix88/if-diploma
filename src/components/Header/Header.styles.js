import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  MOBILE_RADIUS,
  TABLET_BREAKPOINT,
  TABLET_RADIUS,
  whiteThemeColorGray,
  whiteThemeColorSecondaryGray,
} from '../../constants/styles.constants';

export const headerStyles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 64,
    gap: 16,
  },
  wrapperSearch: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: 96,
  },
  wrapperButtons: {
    display: 'flex',
    gap: 48,
  },
  wrapperSettingBtn: {
    display: 'flex',
    position: 'relative',
  },
  settingsBtn: {
    display: 'flex',
    gap: 16,

    '&:hover': {
      '& $avatar, & $arrow': {
        fill: theme.palette.accent.hover,
      },
    },
  },
  dropDown: {
    position: 'absolute',
    zIndex: 1,
    top: 65,
    left: '-115%',
    backgroundColor: theme.palette.background.main,
    minWidth: 170,
    borderRadius: DESKTOP_RADIUS,
    padding: 20,
    boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.25)',
  },
  username: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
  },
  setting: {
    position: 'relative',
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 1.16,
    color: whiteThemeColorGray,

    '&:after': {
      position: 'absolute',
      content: '""',
      height: 1,
      width: 130,
      backgroundColor: whiteThemeColorSecondaryGray,
      bottom: -13,
      left: 0,
    },

    '&:hover': {
      color: theme.palette.accent.hover,
    },
  },
  orders: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 1.16,
    color: whiteThemeColorGray,

    '&:hover': {
      color: theme.palette.accent.hover,
    },
  },
  logOut: {
    margin: '0 auto',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    wrapperSearch: {
      gap: 80,
    },
    wrapperButtons: {
      gap: 40,
    },
    dropDown: {
      top: 65,
      left: '-115%',
      minWidth: 135,
      borderRadius: DESKTOP_RADIUS,
      padding: 16,
    },
    username: {
      fontSize: 18,
      marginBottom: 20,
    },
    setting: {
      fontSize: 16,
      marginBottom: 20,

      '&:after': {
        width: 100,
        bottom: -13,
        left: 0,
      },
    },
    orders: {
      fontSize: 16,
      marginBottom: 20,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      paddingTop: 24,
      paddingBottom: 40,
    },
    wrapperSearch: {
      gap: 50,
    },
    wrapperButtons: {
      gap: 30,
    },
    dropDown: {
      top: 45,
      left: '-170%',
      minWidth: 120,
      borderRadius: TABLET_RADIUS,
      padding: 16,
    },
    username: {
      fontSize: 16,
      marginBottom: 16,
    },
    setting: {
      fontSize: 16,
      marginBottom: 16,

      '&:after': {
        width: 80,
        bottom: -8,
        left: 0,
      },
    },
    orders: {
      fontSize: 16,
      marginBottom: 16,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      paddingTop: 16,
      paddingBottom: 16,
      gap: 8,
    },
    logo: {
      display: 'none',
    },
    wrapperSearch: {
      gap: 8,
    },
    wrapperButtons: {
      gap: 8,
    },
    settingsBtn: {
      gap: 8,
    },
    dropDown: {
      top: 35,
      left: '-170%',
      minWidth: 120,
      borderRadius: MOBILE_RADIUS,
      padding: 8,
    },
    username: {
      fontSize: 14,
      marginBottom: 8,
    },
    setting: {
      fontSize: 14,
      marginBottom: 8,

      '&:after': {
        width: 100,
        bottom: -4,
        left: 0,
      },
    },
    orders: {
      fontSize: 14,
      marginBottom: 8,
    },
  },
  logo: {},
  avatar: {},
  arrow: {},
});

export const useHeaderStyles = createUseStyles(headerStyles, {
  name: 'Header',
});
