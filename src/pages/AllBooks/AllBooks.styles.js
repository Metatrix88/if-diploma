import { createUseStyles } from 'react-jss';

// constants
import {
  DESKTOP_RADIUS,
  MOBILE_BREAKPOINT,
  MOBILE_RADIUS,
  TABLET_BREAKPOINT,
  TABLET_RADIUS,
} from '../../constants/styles.constants';

export const AllBooksStyles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.section,
    padding: '26px 32px',
    marginBottom: 40,
    borderRadius: DESKTOP_RADIUS,
  },
  title: {
    marginBottom: 20,
  },
  wrapperCards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: -8,
    marginLeft: -8,
    marginBottom: -12,
  },
  button: {
    maxWidth: 185,
    margin: '0 auto',
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      padding: 24,
      marginBottom: 24,
      borderRadius: TABLET_RADIUS,
    },
    title: {
      marginBottom: 30,
    },
    button: {
      maxWidth: 140,
    },
  },
  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      padding: 16,
      marginBottom: 16,
      borderRadius: MOBILE_RADIUS,
    },
    title: {
      marginBottom: 16,
      textAlign: 'center',
    },
    wrapperCards: {
      marginRight: -4,
      marginLeft: -4,
      marginBottom: 0,
    },
    button: {
      maxWidth: 100,
    },
  },
});

export const useAllBooksStyles = createUseStyles(AllBooksStyles, {
  name: 'AllBooks',
});
