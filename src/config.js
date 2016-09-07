const rem = 16;
const borderWidth = 2;

/**
 * Type Scale
 *  from: http://www.basscss.com/#basscss-typography
 */
const typeScale = {
  f1: 2, // * rem
  f2: 1.5, // * rem
  f3: 1.25, // * rem
  f4: 1, // * rem
  f5: 0.875, // * rem
  f6: 0.75, // * rem
};

/**
 * Whitespace Scale
 *  extension of http://www.basscss.com whitespace scale
 */
const scale = [
  0,     // 0
  0.5,   // 1
  1,     // 2
  2,     // 3
  4,     // 4
  8,     // 5
  16,    // 6
];

/**
 * line Heights
 *  from: https://github.com/tachyons-css/tachyons-line-height
 */
const lineHeightScale = {
  solid: 1,
  title: 1.3,
  copy: 1.6,
};

/**
 * Color palette
 *  from: http://clrs.cc
 */
const clrs = {
  aqua: '#7fdbff',
  blue: '#0074d9',
  lime: '#01ff70',
  navy: '#001f3f',
  teal: '#39cccc',
  olive: '#3d9970',
  green: '#2ecc40',
  red: '#ff4136',
  maroon: '#85144b',
  orange: '#ff851b',
  purple: '#b10dc9',
  yellow: '#ffdc00',
  fuchsia: '#f012be',
  gray: '#aaaaaa',
  white: '#ffffff',
  black: '#111111',
  silver: '#dddddd',
};

export default {
  rem,
  scale,
  clrs,
  typeScale,
  borderWidth,
  lineHeightScale,
};
