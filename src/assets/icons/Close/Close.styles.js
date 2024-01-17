import { createUseStyles } from 'react-jss';
import {whiteThemeColorGray, whiteThemeColorSecondaryGray} from '../../../constants/styles.constants';

export const closeStyles = () => ({
  root: {
    fill: whiteThemeColorSecondaryGray,
    width: 16,
    height: 16,

    '&:hover': {
      fill: whiteThemeColorGray,
    },
  },
});

export const useCloseStyles = createUseStyles(closeStyles, {
  name: 'Close',
});
