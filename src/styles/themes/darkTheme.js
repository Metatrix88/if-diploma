import {
  darkThemeColorBgBody,
  darkThemeColorBlack,
  darkThemeColorGeneralBlue,
  darkThemeColorGray, darkThemeColorGrayTwo,
  darkThemeColorSecondaryGray,
  darkThemeColorWhite,
} from '../../constants/styles.constants';

export const darkTheme = {
  palette: {
    text: {
      main: darkThemeColorBlack,
      secondary: darkThemeColorWhite,
      tertiary: darkThemeColorGrayTwo,
      // quaternary: darkThemeColorYellow,
      // textBtn: darkThemeColorWhite,
    },
    buttons: {
      primaryContained: darkThemeColorGeneralBlue,
      secondaryContained: darkThemeColorGray,
      primaryContainedTextColor: darkThemeColorWhite,
      mainText: darkThemeColorBlack,
      secondaryText: darkThemeColorGray,
      accentText: darkThemeColorGeneralBlue,
    },
    icons: {
      main: darkThemeColorGeneralBlue,
      secondary: darkThemeColorSecondaryGray,
      bgColor: darkThemeColorSecondaryGray,
      bgColorSecondary: darkThemeColorGray,
    },
    background: {
      main: darkThemeColorBgBody,
      section: darkThemeColorSecondaryGray,
      footer: darkThemeColorSecondaryGray,
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
