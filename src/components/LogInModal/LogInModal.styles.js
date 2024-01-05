import { createUseStyles } from 'react-jss';
import {
  DESKTOP_RADIUS,
  lineHeight,
  whiteThemeColorGray,
  whiteThemeColorSecondaryGray,
} from '../../constants/styles.constants';

export const logInModalStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 400,
    color: whiteThemeColorGray,
  },
  textField: {
    borderRadius: DESKTOP_RADIUS,
    border: `1px solid ${whiteThemeColorSecondaryGray}`,
    lineHeight: lineHeight,
    fontSize: 18,
    fontWeight: 400,
    padding: '8px 16px',
    height: 44,
    marginBottom: 16,

    '&:last-of-type': {
      marginBottom: 24,
    },
  },
  btn: {
    fontSize: 18,
  },
});

export const useLogInModalStyles = createUseStyles(logInModalStyles, {
  name: 'LogInModal',
});