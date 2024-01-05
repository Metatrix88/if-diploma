import {
  darkThemeColorBgBody,
  darkThemeColorGeneralBlue,
  darkThemeColorGray,
  darkThemeColorWhite,
} from '../../constants/styles.constants';

export const darkTheme = {
  palette: {
    text: {
      // main: darkThemeColorYellow,
      // secondary: darkThemeColorWhite,
      // tertiary: darkThemeColorYellow,
      // quaternary: darkThemeColorYellow,
      textBtn: darkThemeColorWhite,
    },
    buttons: {
      text: darkThemeColorGray,
      outlined: darkThemeColorGeneralBlue,
    },
    icons: {
      // bgColor: darkThemeColorDarkBlue,
      main: darkThemeColorGeneralBlue,
    },
    background: {
      main: darkThemeColorBgBody,
      // section: darkThemeBgColor,
      // secondary: darkThemeBgColor,
      // tertiary: darkThemeColorGray,
      // formMd: darkThemeBgColor,
      // quaternary: darkThemeColorDarkBlue,
      // pages: darkThemeBgColor,
    },
    accent: {
      hover: darkThemeColorGeneralBlue,
      // btn: darkThemeColorDarkBlue,
    },
    border: {
      // main: darkThemeBorderLightColor,
      // secondary: darkThemeColorDarkBlue,
    },
  },
};
