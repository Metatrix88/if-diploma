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
    },
  },
});

export const useAllBooksStyles = createUseStyles(AllBooksStyles, {
  name: 'AllBooks',
});
