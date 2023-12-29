import { createUseStyles } from 'react-jss';
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/styles.constatnts';

export const loaderStyles = () => ({
  root: {
    textAlign: 'center',
  },
  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    images: {
      width: 150,
      height: 150,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    images: {
      width: 100,
      height: 100,
    },
  },
  images: {},
});

export const useLoaderStyles = createUseStyles(loaderStyles, {
  name: 'Loader',
});
