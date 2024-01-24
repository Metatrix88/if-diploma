import { createUseStyles } from 'react-jss';

// constants
import {
  DESKTOP_RADIUS,
  MOBILE_BREAKPOINT,
  MOBILE_RADIUS,
  TABLET_BREAKPOINT,
  TABLET_RADIUS, whiteThemeColorGeneralBlue,
} from '../../constants/styles.constants';

export const CardBookStyles = (theme) => ({
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
  wrapperCard: {
    width: '25%',
    paddingRight: 8,
    paddingLeft: 8,
    marginBottom: 48,
  },
  card: {
    display: 'flex',
    gap: 12,
  },
  image: {
    maxWidth: 122,
    width: '100%',
    height: 185,
  },
  bookInfo: {
    // maxWidth: 122,
    // width: '100%',
  },
  status: {
    borderRadius: 24,
    border: `2px solid ${whiteThemeColorGeneralBlue}`,
    fontSize: 12,
    fontWeight: 600,
    maxWidth: 100,
    width: '100%',
    padding: 5,
    lineHeight: 1.16,
    textAlign: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    lineHeight: 1.16,
    marginBottom: 25,
  },
  button: {
    width: 122,
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

export const useCardBookStyles = createUseStyles(CardBookStyles, {
  name: 'CardBook',
});
