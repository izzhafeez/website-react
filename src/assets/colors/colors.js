export const COLORS = Object.freeze({
  BRIGHT_GREEN: '#97C616',
  PINK: '#FF86FE',

  GREEN: '#009645',
  GREEN_BG: '#e6f5ec',
  GREEN_LIGHT: '#4db67d',
  GREEN_V_LIGHT: '#99d5b5',
  GREEN_DARK: '#006930',
  GREEN_V_DARK: '#003c1c',

  BLUE: '#005EC4',
  BLUE_BG: '#e6eff9',
  BLUE_LIGHT: '#4d8ed6',
  BLUE_V_LIGHT: '#99bfe7',
  BLUE_DARK: '#004289',
  BLUE_V_DARK: '#00264e',

  RED: '#D42E12',
  RED_BG: '#fbeae7',
  RED_LIGHT: '#e16d59',
  RED_V_LIGHT: '#eeaba0',
  RED_DARK: '#94200d',
  RED_V_DARK: '#551207',

  YELLOW: '#FA9E0D',
  YELLOW_BG: '#fff5e7',
  YELLOW_LIGHT: '#fcbb56',
  YELLOW_V_LIGHT: '#fdd89e',
  YELLOW_DARK: '#af6f09',
  YELLOW_V_DARK: '#643f05',

  BROWN: '#9D5B25',
  BROWN_BG: '#f5efe9',
  BROWN_LIGHT: '#ba8c66',
  BROWN_V_LIGHT: '#d8bda8',
  BROWN_DARK: '#6e401a',
  BROWN_V_DARK: '#3f240f',

  PURPLE: '#9900AA',
  PURPLE_BG: '#f5e6f7',
  PURPLE_LIGHT: '#b84dc4',
  PURPLE_V_LIGHT: '#d699dd',
  PURPLE_DARK: '#6b0077',
  PURPLE_V_DARK: '#3d0044',

  CYAN: '#0099AA',
  CYAN_BG: '#e6f5f7',
  CYAN_LIGHT: '#4db8c4',
  CYAN_V_LIGHT: '#99d6dd',
  CYAN_DARK: '#006b77',
  CYAN_V_DARK: '#003d44',

  GREY: '#748477',
  GREY_BG: '#f1f3f1',
  GREY_LIGHT: '#9EA9A0',
  GREY_V_LIGHT: '#C7CEC9',
  GREY_DARK: '#515C53',
  GREY_V_DARK: '#2E3530',

  WHITE: '#FFFFFF',
  BLACK: '#000000',
});

const convertColor = color => {
  const hex = COLORS[color];
  if (!hex) {
    return '';
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r,g,b];
};

export default convertColor;