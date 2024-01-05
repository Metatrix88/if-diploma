import { createUseStyles } from 'react-jss';

// constants
import { whiteThemeColorSecondaryGray } from '../../../constants/styles.constants';

export const searchStyles = () => ({
  root: {
    width: 18,
    aspectRatio: '1/1',
    fill: whiteThemeColorSecondaryGray,
  },
});

export const useSearchIconStyles = createUseStyles(searchStyles, {
  name: 'SearchIcon',
});
