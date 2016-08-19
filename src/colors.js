import * as R from 'ramda';

/**
 * Capitalize the first character of a string
 */
export function capitalize(str) {
  if (!R.is(String, str)) { return str; }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Map over the keys of an object
 * mapKeys(R.toUpper, { a: 1, b: 2, c: 3 }); // { A: 1, B: 2, C: 3 }
 */
export const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj))));

/**
 * Text Colors
 * for example: black would apply `color: '#515163'`
 */
export const textColors = R.map(R.objOf('color', R.__));

/**
 * Background Colors
 * for example:
 * 	bgBlack would apply `backgroundColor: '#515163'`
 */
export const bgColors = R.compose(
  R.map(R.objOf('backgroundColor', R.__)),
  mapKeys(clr => `bg${ capitalize(clr) }`)
);

/**
 * Border Colors
 * for example:
 * 	borderBlack would apply `borderColor: '#515163'`
 */
export const borderColors = R.compose(
  R.map(R.objOf('borderColor', R.__)),
  mapKeys(clr => `border${ capitalize(clr) }`)
);

/**
 * Generate color classes
 */
export default function(clrs) {
  return {
    ...textColors(clrs),
    ...bgColors(clrs),
    ...borderColors(clrs),
  };
}
