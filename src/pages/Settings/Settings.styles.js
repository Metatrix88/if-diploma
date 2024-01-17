import { createUseStyles } from 'react-jss';

// constants
import {
  DESKTOP_RADIUS, lineHeight,
  MOBILE_BREAKPOINT, MOBILE_RADIUS,
  TABLET_BREAKPOINT, TABLET_RADIUS, whiteThemeColorSecondaryGray,
} from '../../constants/styles.constants';

export const SettingsStyles = (theme) => ({
  root: {
    maxWidth: 394,
    width: '100%',
    backgroundColor: theme.palette.background.section,
    padding: '26px 37px 21px',
    textAlign: 'center',
    margin: '0 auto',
    borderRadius: DESKTOP_RADIUS,
  },
  title: {
    marginBottom: 40,
  },
  avatar: {
    width: 110,
    height: 110,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    justifyContent: 'center',
    margin: '0 auto 16px',
    backgroundColor: theme.palette.icons.bgColorSecondary,
  },
  loadingPhotoBtn: {
    maxWidth: 122,
    margin: '0 auto 26px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    textAlign: 'justify',
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 600,
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
    width: '100%',

    '&:last-of-type': {
      marginBottom: 24,
    },
    '&$inputDate': {
      marginBottom: 16,
    },
  },
  inputDate: {},
  saveBtn: {
    maxWidth: 122,
    margin: '0 auto',
  },

  //For tablets:
  [`@media (max-width: ${TABLET_BREAKPOINT})`]: {
    root: {
      maxWidth: 390,
      padding: '24px 34px 20px',
      borderRadius: TABLET_RADIUS,
    },
    title: {
      marginBottom: 30,
    },
    avatar: {
      width: 90,
      height: 90,
      margin: '0 auto 16px',
    },
    loadingPhotoBtn: {
      maxWidth: 122,
    },
  },
  // For mobiles:
  [`@media (max-width: ${MOBILE_BREAKPOINT})`]: {
    root: {
      borderRadius: MOBILE_RADIUS,
    },
    title: {
      marginBottom: 16,
    },
    avatar: {
      width: 60,
      height: 60,
    },
    loadingPhotoBtn: {
      maxWidth: 110,
    },
  },
});

export const useSettingsStyles = createUseStyles(SettingsStyles, {
  name: 'Settings',
});
