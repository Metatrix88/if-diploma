import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/styles.constants';

export const footerStyles = (theme) => ({
  wrapperFooter: {
    backgroundColor: theme.palette.background.footer,
  },
  footer: {
    display: 'flex',
    paddingTop: 40,
    paddingBottom: 40,
  },
  footerMenu: {
    display: 'flex',
    width: '50%',
    gap: 24,
  },
  list: {
    width: '33.33%',
  },
  title: {
    marginBottom: 20,
  },
  item: {
    marginBottom: 8,
    lineHeight: 1.16,
  },
  link: {
    '&:hover': {
      color: theme.palette.accent.hover,
    },
  },
  footerConnect: {
    width: '50%',
    textAlign: 'end',
  },
  media: {
    display: 'flex',
    gap: 16,
    justifyContent: 'end',
    padding: '0 70px',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    media: {
      padding: '0 55px',
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    title: {
      marginBottom: 16,
    },
    link: {
      fontSize: 14,
    },
    media: {
      padding: '0 40px',
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    title: {
      marginBottom: 8,
    },
    footerMenu: {
      display: 'flex',
      width: '75%',
      gap: 8,
    },
    footerConnect: {
      width: '25%',
      textAlign: 'start',
    },
    media: {
      display: 'flex',
      gap: 8,
      padding: 0,
      justifyContent: 'start',
    },
  },
});

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
