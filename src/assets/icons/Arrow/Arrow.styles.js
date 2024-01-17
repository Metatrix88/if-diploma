import { createUseStyles } from 'react-jss';
import { MOBILE_BREAKPOINT } from '../../../constants/styles.constants';

export const arrowStyles = (theme) => ({
  root: {
    fill: theme.palette.icons.bgColor,
    width: 16,
    height: 10,
  },

  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      width: 14,
      height: 8,
    },
  },
});

export const useArrowIconStyles = createUseStyles(arrowStyles, {
  name: 'ArrowIcon',
});
