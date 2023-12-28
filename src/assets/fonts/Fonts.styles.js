// open sans 400
import openSans400CyrillicExt from './open-sans-400/open-sans-cyrillic-ext.woff2';
import openSans400Cyrillic from './open-sans-400/open-sans-cyrillic.woff2';
import openSans400GreekExt from './open-sans-400/open-sans-greek-ext.woff2';
import openSans400Greek from './open-sans-400/open-sans-greek.woff2';
import openSans400Hebrew from './open-sans-400/open-sans-hebrew.woff2';
import openSans400Math from './open-sans-400/open-sans-math.woff2';
import openSans400Symbols from './open-sans-400/open-sans-symbols.woff2';
import openSans400Vietnamese from './open-sans-400/open-sans-vietnamese.woff2';
import openSans400LatinExt from './open-sans-400/open-sans-latin-ext.woff2';
import openSans400Latin from './open-sans-400/open-sans-latin.woff2';

// open sans 600
import openSans600CyrillicExt from './open-sans-600/open-sans-cyrillic-ext.woff2';
import openSans600Cyrillic from './open-sans-600/open-sans-cyrillic.woff2';
import openSans600Greek from './open-sans-600/open-sans-greek.woff2';
import openSans600GreekExt from './open-sans-600/open-sans-greek-ext.woff2';
import openSans600Hebrew from './open-sans-600/open-sans-hebrew.woff2';
import openSans600Latin from './open-sans-600/open-sans-latin.woff2';
import openSans600LatinExt from './open-sans-600/open-sans-latin-ext.woff2';
import openSans600Vietnamese from './open-sans-600/open-sans-vietnamese.woff2';

// open sans 700
import openSans700CyrillicExt from './open-sans-700/open-sans-cyrillic-ext.woff2';
import openSans700Cyrillic from './open-sans-700/open-sans-cyrillic.woff2';
import openSans700GreekExt from './open-sans-700/open-sans-greek-ext.woff2';
import openSans700Greek from './open-sans-700/open-sans-greek.woff2';
import openSans700Hebrew from './open-sans-700/open-sans-hebrew.woff2';
import openSans700Math from './open-sans-700/open-sans-math.woff2';
import openSans700Symbols from './open-sans-700/open-sans-symbols.woff2';
import openSans700Vietnamese from './open-sans-700/open-sans-vietnamese.woff2';
import openSans700LatinExt from './open-sans-700/open-sans-latin-ext.woff2';
import openSans700Latin from './open-sans-700/open-sans-latin.woff2';

export const fontsStyles = {
  openSans400: {
    '@font-face': [
      /* cyrillic-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400CyrillicExt}) format("woff2")`,
        unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      /* cyrillic */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Cyrillic}) format("woff2")`,
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      /* greek-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400GreekExt}) format("woff2")`,
        unicodeRange: 'U+1F00-1FFF',
      },
      /* greek */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Greek}) format("woff2")`,
        unicodeRange: 'U+0370-03FF',
      },
      /* hebrew */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Hebrew}) format("woff2")`,
        unicodeRange: 'U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F',
      },
      /* math */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Math}) format("woff2")`,
        unicodeRange: 'U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115, U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF',
      },
      /* symbols */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Symbols}) format("woff2")`,
        unicodeRange: 'U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F10C, U+1F110-1F16C, U+1F170-1F190, U+1F19B-1F1AC, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F579, U+1F57B-1F594, U+1F597-1F5A3, U+1F5A5-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CB, U+1F6CD-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8B1, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA74, U+1FA78-1FA7A, U+1FA80-1FA86, U+1FA90-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6, U+1FB00-1FBFF',
      },
      /* vietnamese */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Vietnamese}) format("woff2")`,
        unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      /* latin-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400LatinExt}) format("woff2")`,
        unicodeRange: 'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      /* latin */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans400Latin}) format("woff2")`,
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    ],
  },
  openSans600: {
    '@font-face': [
      /* cyrillic-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600CyrillicExt}) format("woff2")`,
        unicodeRange:
          'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      /* cyrillic */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Cyrillic}) format("woff2")`,
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      /* greek-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600GreekExt}) format("woff2")`,
        unicodeRange: 'U+1F00-1FFF',
      },
      /* greek */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Greek}) format("woff2")`,
        unicodeRange: 'U+0370-03FF',
      },
      /* hebrew */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Hebrew}) format("woff2")`,
        unicodeRange: 'U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F',
      },
      /* vietnamese */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Vietnamese}) format("woff2")`,
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      /* latin-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600LatinExt}) format("woff2")`,
        unicodeRange:
          'U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      /* latin */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans600Latin}) format("woff2")`,
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    ],
  },
  openSans700: {
    '@font-face': [
      /* cyrillic-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700CyrillicExt}) format("woff2")`,
        unicodeRange:
          'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      },
      /* cyrillic */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Cyrillic}) format("woff2")`,
        unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      },
      /* greek-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700GreekExt}) format("woff2")`,
        unicodeRange: 'U+1F00-1FFF',
      },
      /* greek */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Greek}) format("woff2")`,
        unicodeRange: 'U+0370-03FF',
      },
      /* hebrew */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Hebrew}) format("woff2")`,
        unicodeRange: 'U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F',
      },
      /* math */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Math}) format("woff2")`,
        unicodeRange: 'U+0302-0303, U+0305, U+0307-0308, U+0330, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2034-2037, U+2057, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2102, U+210A-210E, U+2110-2112, U+2115, U+2119-211D, U+2124, U+2128, U+212C-212D, U+212F-2131, U+2133-2138, U+213C-2140, U+2145-2149, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B6, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF',
      },
      /* symbols */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Symbols}) format("woff2")`,
        unicodeRange: 'U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F10C, U+1F110-1F16C, U+1F170-1F190, U+1F19B-1F1AC, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F579, U+1F57B-1F594, U+1F597-1F5A3, U+1F5A5-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CB, U+1F6CD-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8B1, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA74, U+1FA78-1FA7A, U+1FA80-1FA86, U+1FA90-1FAA8, U+1FAB0-1FAB6, U+1FAC0-1FAC2, U+1FAD0-1FAD6, U+1FB00-1FBFF',
      },
      /* vietnamese */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Vietnamese}) format("woff2")`,
        unicodeRange:
          'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      },
      /* latin-ext */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700LatinExt}) format("woff2")`,
        unicodeRange:
          'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      },
      /* latin */
      {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontStretch: '100%',
        fontDisplay: 'swap',
        src: `url(${openSans700Latin}) format("woff2")`,
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    ],
  },
};