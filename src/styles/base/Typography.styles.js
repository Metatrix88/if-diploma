import {
  DESKTOP_SMALL_BREAKPOINT,
  fontFamily,
  lineHeight,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  whiteThemeColorBlack,
} from '../../constants/styles.constants';

export const typographyStyles = (theme) => ({
  body: {
    position: 'relative',
    background: theme.palette.background.main,
    fontFamily: fontFamily.join(', '),
    fontStyle: 'normal',
    fontWeight: 400,
    color: whiteThemeColorBlack,
  },

  a: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 16,
    color: whiteThemeColorBlack,
  },
  h1: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: lineHeight,
  },
  h2: {
    fontWeight: 700,
    fontSize: 38,
    lineHeight: lineHeight,
  },
  h3: {
    fontWeight: 600,
    fontSize: 28,
    lineHeight: lineHeight,
  },
  h4: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: lineHeight,
  },
  h5: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: lineHeight,
  },
  h6: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: lineHeight,
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 26,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 16,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    a: {
      fontSize: 12,
    },
    h2: {
      fontSize: 22,
    },
    h3: {
      fontSize: 14,
    },
    h4: {
      fontSize: 14,
    },
    h5: {
      fontSize: 14,
    },
  },
});
