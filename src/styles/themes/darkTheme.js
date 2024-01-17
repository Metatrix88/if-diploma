import {
  darkThemeColorBgBody,
  darkThemeColorBlack,
  darkThemeColorGeneralBlue,
  darkThemeColorGray,
  darkThemeColorSecondaryGray,
  darkThemeColorWhite,
} from '../../constants/styles.constants';

export const darkTheme = {
  palette: {
    text: {
      // main: darkThemeColorYellow,
      // secondary: darkThemeColorWhite,
      // tertiary: darkThemeColorYellow,
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
