import { primaryBlue, secondaryBlue } from './variables';

export const themes = {
  light: {
    textColor: '#171717',
    pageBackground: '#f5f7f9',
    pageHeaderBackground: 'linear-gradient(to bottom, #0ba7fd55, #fff0)',
    accentHeight: '5px',
    headingColor: '#171717',
    heroBackground: `linear-gradient(to top, ${secondaryBlue}, ${primaryBlue})`,
  },
  dark: {
    textColor: '#fff9',
    pageBackground: primaryBlue,
    pageHeaderBackground: 'transparent',
    accentHeight: '0px',
    headingColor: '#fff',
    heroBackground: primaryBlue,
  },
};
