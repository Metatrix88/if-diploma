import {
  fontFamily,
  lineHeight,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  whiteThemeColorBlack,
} from '../../constants/styles.constatnts';

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

  h2: {
    fontWeight: 700,
    fontSize: 38,
    lineHeight: lineHeight,
    textAlign: 'center',
  },
  h3: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: lineHeight,
  },
  h4: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: lineHeight,
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    h2: {
      fontSize: 34,
    },
    h4: {
      fontSize: 16,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    a: {
      fontSize: 12,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 14,
    },
    h4: {
      fontSize: 14,
    },
  },
});
