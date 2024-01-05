import {
  whiteThemeColorGeneralRed,
  whiteThemeColorGray,
  whiteThemeColorWhite,
} from '../../constants/styles.constants';

export const whiteTheme = {
  palette: {
    text: {
      // main: whiteThemeColorWhite,
      // secondary: whiteThemeColorBlack,
      // tertiary: whiteThemeColorBlack,
      // quaternary: whiteThemeColorBlue,
      textBtn: whiteThemeColorWhite,
    },
    buttons: {
      text: whiteThemeColorGray,
      outlined: whiteThemeColorGeneralRed,
    },
    icons: {
      // bgColor: whiteThemeColorWhite,
      main: whiteThemeColorGeneralRed,
    },
    background: {
      main: whiteThemeColorWhite,
      // section: whiteThemeBgColor,
      // secondary: whiteThemeBorderLightColor,
      // tertiary: whiteThemeBorderLightColor,
      // formMd: whiteThemeAccentColor,
      // quaternary: whiteThemePrimaryDarkBlue,
      // pages: whiteThemeBgColorPages,
    },
    accent: {
      hover: whiteThemeColorGeneralRed,
      // btn: whiteThemeColorBlue,
    },
    border: {
      // main: whiteThemeBorderLightColor,
      // secondary: whiteThemeColorBlue,
    },
  },
};
