import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../../constants/styles.constants';

export const avatarStyles = (theme) => ({
  root: {
    fill: theme.palette.icons.bgColor,
    width: 80,
    aspectRatio: '1/1',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    root: {
      width: 60,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      width: 40,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      width: 24,
    },
  },
});

export const useAvatarStyles = createUseStyles(avatarStyles, {
  name: 'AvatarIcon',
});
