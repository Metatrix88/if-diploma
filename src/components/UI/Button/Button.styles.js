import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  MOBILE_RADIUS,
  TABLET_BREAKPOINT,
  TABLET_RADIUS,
} from '../../../constants/styles.constants';

export const buttonStyles = (theme) => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',

    '&$contained': {
      borderRadius: DESKTOP_RADIUS,
      lineHeight: '1.16',
    },
    '&$primaryContained': {
      backgroundColor: theme.palette.buttons.primaryContained,
      color: theme.palette.buttons.primaryContainedTextColor,
    },
    '&$secondaryContained': {
      backgroundColor: theme.palette.buttons.secondaryContained,
      color: theme.palette.buttons.primaryContainedTextColor,
    },
    '&$largeContained': {
      height: 48,
      fontSize: 20,
      fontWeight: 600,
    },
    '&$mediumContained': {
      height: 44,
      fontSize: 18,
      fontWeight: 600,
    },
    '&$smallContained': {
      height: 32,
      fontSize: 12,
      fontWeight: 600,
    },
    '&$largeText': {
      whiteSpace: 'nowrap',
      fontSize: 20,
      fontWeight: 700,
    },
    '&$mediumText': {
      whiteSpace: 'nowrap',
      fontSize: 16,
      fontWeight: 700,
    },

    '&$mediumSecondaryText': {
      whiteSpace: 'nowrap',
      fontSize: 16,
      fontWeight: 600,
    },

    '&$mainText': {
      color: theme.palette.buttons.mainText,

      '&:hover, &:focus, &:active': {
        color: theme.palette.accent.hover,
      },
    },

    '&$secondaryText': {
      color: theme.palette.buttons.secondaryText,

      '&:hover, &:focus': {
        color: theme.palette.accent.hover,
      },
    },

    '&$accentText': {
      color: theme.palette.buttons.accentText,
    },

    '&$icon': {
      width: 'auto',
    },
  },
  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {},

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      '&$contained': {
        borderRadius: TABLET_RADIUS,
      },

      '&$largeContained': {
        height: 36,
        fontSize: 18,
      },
      '&$mediumContained': {
        height: 32,
        fontSize: 16,
      },
      '&$largeText': {
        fontSize: 16,
      },
    },
    contained: {},
    largeContained: {},
    mediumContained: {},
    largeText: {},
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      '&$contained': {
        borderRadius: MOBILE_RADIUS,
      },
      '&$largeContained': {
        height: 32,
        fontSize: 14,
      },
      '&$mediumContained': {
        fontSize: 14,
      },
      '&$largeText': {
        fontSize: 14,
      },
      '&$mediumText': {
        fontSize: 14,
      },
      '&$mediumSecondaryText': {
        fontSize: 14,
      },
    },
    contained: {},
    largeContained: {},
    mediumContained: {},
    largeText: {},
    mediumText: {},
    mediumSecondaryText: {},
  },
  contained: {},
  primaryContained: {},
  secondaryContained: {},
  largeContained: {},
  mediumContained: {},
  smallContained: {},
  largeText: {},
  mediumText: {},
  mediumSecondaryText: {},
  secondaryText: {},
  mainText: {},
  accentText: {},
  icon: {},
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: 'Button',
});
