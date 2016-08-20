import * as R from 'ramda';

/**
 * Font Sizes
 */
export const fontSizes = R.map(size => ({ fontSize: size }));

/**
 * Font Weights
 */
export const weights = {
  normal: { fontWeight: 'normal' },
  bold: { fontWeight: 'bold' },
  fw1: { fontWeight: '100' },
  fw2: { fontWeight: '200' },
  fw3: { fontWeight: '300' },
  fw4: { fontWeight: '400' },
  fw5: { fontWeight: '500' },
  fw6: { fontWeight: '600' },
  fw7: { fontWeight: '700' },
  fw8: { fontWeight: '800' },
  fw9: { fontWeight: '900' },
};

/**
 * Font Styles
 */
export const fontStyles = {
  italic: { fontStyle: 'italic' },
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },
  textAlignVertical: { textAlignVertical: 'center'},
};

/**
 * Generate type classes
 */
export default function(typeScale) {
  return {
    ...fontSizes(typeScale),
    ...weights,
    ...fontStyles,
  };
}
