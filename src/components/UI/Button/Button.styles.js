import { createUseStyles } from 'react-jss';
import {whiteThemeColorGray} from '../../../constants/styles.constatnts';

export const buttonStyles = () => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    '&$icon': {
      backgroundColor: 'transparent',
      width: 'auto',
    },
    '&$text': {
      fontWeight: 700,
      color: whiteThemeColorGray,
      padding: 0,
      width: 'auto',
      backgroundColor: 'transparent',
    },
    // '&$outlined': {
    //   borderRadius: buttonRadiusLg,
    //   border: `1px solid ${theme.palette.border.secondary}`,
    //   maxWidth: 128,
    //   height: 48,
    //   width: '100%',
    //   fontSize: 18,
    //   padding: '12px 16px',
    //   lineHeight: '1.16',
    //   color: theme.palette.text.quaternary,

      // '&:hover': {
      //   border: `1px solid ${theme.palette.accent.hover}`,
      //   color: theme.palette.accent.hover,
      // },
    // },
    // '&$primary': {
    //   background: theme.palette.buttons.secondary,
    //   color: theme.palette.text.main,
    // },


    // '&$counter': {
    //   width: 30,
    //   height: 30,
    //   border: `1px solid ${theme.palette.border.secondary}`,
    //   fontSize: 18,
    //   fontWeight: 400,
    //
    //   '&:disabled': {
    //     border: '1px solid rgba(206, 206, 206, 1)',
    //     color: 'rgba(206, 206, 206, 1)',
    //   },
    // },
  },
  outlined: {},
  primary: {},
  icon: {},
  counter: {},
  text: {},
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: 'Button',
});
