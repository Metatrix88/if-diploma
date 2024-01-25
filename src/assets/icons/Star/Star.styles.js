import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../../constants/styles.constants';

export const starIconStyles = () => ({
  root: {
    width: 15,
    aspectRatio: '1/1',
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {},

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {},

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {},
});

export const useStarIconStyles = createUseStyles(starIconStyles, {
  name: 'Star',
});
