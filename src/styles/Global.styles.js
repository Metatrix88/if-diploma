import { createUseStyles } from 'react-jss';

// styles
import { resetStyles } from './base/Reset.styles';
import { fontsStyles } from '../assets/fonts/Fonts.styles';
import { typographyStyles } from './base/Typography.styles';
import 'react-datepicker/dist/react-datepicker.css';

export const globalStyles = (theme) => ({
  '@global': {
    ...resetStyles,
    '@font-face': [
      ...fontsStyles.openSans400['@font-face'],
      ...fontsStyles.openSans600['@font-face'],
      ...fontsStyles.openSans700['@font-face'],
    ],
    ...typographyStyles(theme),

    '.react-datepicker__calendar-icon': {
      top: '10%',
    },
    '.react-datepicker__view-calendar-icon input': {
      padding: '6px 10px 5px 30px',
    },
    '.react-datepicker__close-icon': {
      top: -8,
    },
    '.react-datepicker__close-icon::after': {
      backgroundColor: theme.palette.buttons.contained,
      height: 20,
      width: 20,
      fontSize: 14,
    },
  },
});

export const useGlobalStyles = createUseStyles(globalStyles, {
  name: 'GlobalStyles',
});
