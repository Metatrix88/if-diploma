import { createUseStyles } from 'react-jss';

// styles
import { resetStyles } from './base/Reset.styles';
import { fontsStyles } from '../assets/fonts/Fonts.styles';
import { typographyStyles } from './base/Typography.styles';


export const globalStyles = (theme) => ({
  '@global': {
    ...resetStyles,
    '@font-face': [
      ...fontsStyles.openSans400['@font-face'],
      ...fontsStyles.openSans600['@font-face'],
      ...fontsStyles.openSans700['@font-face'],
    ],
    ...typographyStyles(theme),
  },
});

export const useGlobalStyles = createUseStyles(globalStyles, {
  name: 'GlobalStyles',
});
