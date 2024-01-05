import { createUseStyles } from 'react-jss';
// import {
//   DESKTOP_SMALL_BREAKPOINT,
//   MOBILE_BREAKPOINT,
//   TABLET_BREAKPOINT,
// } from '../../../constants/styles.constatnts';

export const closeStyles = () => ({
  root: {
    width: 16,
    height: 16,
  },

  // //For desktops:
  // [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
  //   root: {},
  // },
  //
  // //For tablets:
  // [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
  //   root: {},
  // },
  //
  // // For mobiles:
  // [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
  //   root: {},
  // },
});

export const useCloseStyles = createUseStyles(closeStyles, {
  name: 'Close',
});
