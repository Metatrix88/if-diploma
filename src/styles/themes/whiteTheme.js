import {
  whiteThemeColorBlack,
  whiteThemeColorGeneralRed,
  whiteThemeColorGray,
  whiteThemeColorLightGray, whiteThemeColorSecondaryBlue, whiteThemeColorSecondaryGray, whiteThemeColorSecondaryWhite,
  whiteThemeColorWhite,
} from '../../constants/styles.constants';

export const whiteTheme = {
  palette: {
    text: {
      // main: whiteThemeColorWhite,
      // secondary: whiteThemeColorBlack,
      // tertiary: whiteThemeColorBlack,
      // quaternary: whiteThemeColorBlue,
      // textBtn: whiteThemeColorWhite,
    },
    buttons: {
      primaryContained: whiteThemeColorGeneralRed,
      secondaryContained: whiteThemeColorSecondaryGray,
      primaryContainedTextColor: whiteThemeColorWhite,
      mainText: whiteThemeColorBlack,
      secondaryText: whiteThemeColorGray,
      accentText: whiteThemeColorGeneralRed,
    },
    icons: {
      main: whiteThemeColorGeneralRed,
      secondary: whiteThemeColorGeneralRed,
      bgColor: whiteThemeColorLightGray,
      bgColorSecondary: whiteThemeColorSecondaryBlue,
    },
    background: {
      main: whiteThemeColorSecondaryWhite,
      section: whiteThemeColorWhite,
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
