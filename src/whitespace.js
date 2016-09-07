import { Platform } from 'react-native';

const shorthands = [
  ['m', 'margin'],
  ['p', 'padding'],
];

const directions = [
  ['', ''], // all
  ['h', 'Horizontal'],
  ['v', 'Vertical'],
  ['t', 'Top'],
  ['r', 'Right'],
  ['b', 'Bottom'],
  ['l', 'Left'],
];

/**
 * Whitespace Styles
 *
 * 	Padding
 * 		base: p
 * 		modifiers: h, v, t, r, b, l
 * 		scale: 0, 1, 2, 3, 4, 5, 6
 *
 * 	Margin
 * 		base: m
 * 		modifiers: h, v, t, r, b, l
 * 		scale: 0, 1, 2, 3, 4, 5, 6
 *
 * 	Example:
 * 		mb1 = marginBottom: 0.5 * rem
 *   	ph1 = paddingHorizontal: 4 * rem
 */
function marginAndPaddingStyles(scale) {
  const styles = {};

  shorthands.forEach(([propShorthand, prop]) => {
    directions.forEach(([directionShorthand, direction]) => {
      scale.forEach((unit, idx) => {
        styles[`${propShorthand}${directionShorthand}${idx}`] = {
          [`${prop}${direction}`]: unit,
        };
      });
    });
  });

  return styles;
}

/**
 * Margin to account for status bar on iOS
 */
const mtIOS = {
  marginTop: Platform.OS === 'ios' ? 20 : 0,
};

/**
 * Generate whitespace classes
 */
export default function(scale) {
  return {
    ...marginAndPaddingStyles(scale),
    mtIOS,
  };
}
