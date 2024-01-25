import { createUseStyles } from 'react-jss';

// constants
import {
  DESKTOP_RADIUS, DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT, TABLET_RADIUS, whiteThemeColorBlack,
  whiteThemeColorGeneralBlue,
} from '../../constants/styles.constants';

export const CardBookStyles = (theme) => ({
  root: {
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
    borderRadius: DESKTOP_RADIUS,
  },
  bookInfo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 122,
    width: '100%',
  },
  status: {
    borderRadius: 24,
    border: `2px solid ${whiteThemeColorGeneralBlue}`,
    color: theme.palette.text.secondary,
    fontSize: 12,
    fontWeight: 600,
    maxWidth: 100,
    width: '100%',
    padding: 5,
    lineHeight: 1.16,
    textAlign: 'center',
    marginBottom: 30,
  },
  holder: {
    position: 'absolute',
    top: 36,
    lineHeight: 1.16,
    fontSize: 10,
    color: theme.palette.text.tertiary,
  },
  name: {
    fontSize: 14,
    lineHeight: 1.16,
    flexGrow: 1,
  },
  author: {
    fontSize: 12,
    lineHeight: 1.16,
    color: theme.palette.text.tertiary,
  },
  rating: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  star: {
    fill: 'transparent',
  },
  filled: {
    fill: whiteThemeColorBlack,
  },
  button: {
    marginTop: 8,
    width: 122,
    border: `1px solid ${theme.palette.buttons.secondaryContained}`,

    '&:hover': {
      color: theme.palette.accent.hover,
      border: `1px solid ${theme.palette.accent.hover}`,
    },
  },

  //For small desktop:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    root: {
      width: '33.33%',
      marginBottom: 24,
    },
  },
  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      paddingRight: 4,
      paddingLeft: 4,
    },
    card: {
      gap: 8,
    },
    image: {
      maxWidth: 100,
      width: '100%',
      height: 170,
      borderRadius: TABLET_RADIUS,
    },
    button: {
      width: 100,
    },
  },
  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      width: '100%',
      marginBottom: 16,
      textAlign: 'center',
    },
    status: {
      maxWidth: 120,
    },
    name: {
      textAlign: 'left',
    },
    author: {
      textAlign: 'left',
    },
    button: {
      width: 120,
    },
  },
});

export const useCardBookStyles = createUseStyles(CardBookStyles, {
  name: 'CardBook',
});
