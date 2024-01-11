import { createUseStyles } from 'react-jss';
import {
  DESKTOP_SMALL_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/styles.constants';

export const headerStyles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 64,
    gap: 16,
  },
  wrapperSearch: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: 96,
  },
  wrapperButtons: {
    display: 'flex',
    gap: 48,
  },
  buttonFirstPage: {
    whiteSpace: 'nowrap',
    fontSize: 20,

    '&:hover, &:focus': {
      color: theme.palette.accent.hover,
    },
  },

  //For desktops:
  [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
    buttonFirstPage: {
      fontSize: 18,
    },
    wrapperSearch: {
      gap: 80,
    },
    wrapperButtons: {
      gap: 40,
    },
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      paddingTop: 24,
      paddingBottom: 40,
    },
    buttonFirstPage: {
      fontSize: 16,
    },
    wrapperSearch: {
      gap: 50,
    },
    wrapperButtons: {
      gap: 30,
    },
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      paddingTop: 16,
      paddingBottom: 16,
      gap: 8,
    },
    buttonFirstPage: {
      fontSize: 14,
    },
    wrapperSearch: {
      gap: 8,
    },
    wrapperButtons: {
      gap: 8,
    },
  },
});

export const useHeaderStyles = createUseStyles(headerStyles, {
  name: 'Header',
});




// import { createUseStyles } from 'react-jss';
// import {
//   DESKTOP_SMALL_BREAKPOINT,
//   MOBILE_BREAKPOINT,
//   TABLET_BREAKPOINT,
// } from '../../constants/styles.constants';
//
// export const headerStyles = (theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 30,
//     paddingBottom: 80,
//     gap: 16,
//   },
//   buttons: {
//     display: 'flex',
//     gap: 48,
//   },
//   buttonFirstPage: {
//     whiteSpace: 'nowrap',
//     fontSize: 20,
//
//     '&:hover, &:focus': {
//       color: theme.palette.accent.hover,
//     },
//   },
//
//   //For desktops:
//   [`@media (max-width: ${DESKTOP_SMALL_BREAKPOINT})`]: {
//     buttonFirstPage: {
//       fontSize: 18,
//     },
//     buttons: {
//       gap: 40,
//     },
//   },
//
//   //For tablets:
//   [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
//     root: {
//       paddingTop: 24,
//       paddingBottom: 40,
//     },
//     buttonFirstPage: {
//       fontSize: 16,
//     },
//     buttons: {
//       gap: 30,
//     },
//   },
//
//   // For mobiles:
//   [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
//     root: {
//       paddingTop: 16,
//       paddingBottom: 16,
//       gap: 8,
//     },
//     buttonFirstPage: {
//       fontSize: 14,
//     },
//     buttons: {
//       gap: 8,
//     },
//   },
// });
//
// export const useHeaderStyles = createUseStyles(headerStyles, {
//   name: 'Header',
// });
