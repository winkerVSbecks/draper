import { StyleSheet } from 'react-native';

/**
 * Border Radius
 *
 * 	base: rounded
 *
 * 	modifiers: 0 - 6 (match the dimensions scale)
 */
const borderRadii = rem => ({
  rounded: { borderRadius: 0.25 * rem },
  rounded1: { borderRadius: 1 * rem },
  rounded2: { borderRadius: 2 * rem },
  rounded3: { borderRadius: 3 * rem },
  rounded4: { borderRadius: 4 * rem },
  rounded5: { borderRadius: 8 * rem },
  rounded6: { borderRadius: 16 * rem },
});

/**
 * Borders
 *
 * 	base: border
 *
 * 	size:
 * 	  0 = 0
 * 		default = config.borderWidth
 * 		hl = StyleSheet.hairlineWidth
 */
const borders = borderWidth => ({
  border0: { borderWidth: 0 },
  borderT0: { borderTopWidth: 0 },
  borderR0: { borderRightWidth: 0 },
  borderB0: { borderBottomWidth: 0 },
  borderL0: { borderLeftWidth: 0 },
  border: { borderWidth: borderWidth },
  borderT: { borderTopWidth: borderWidth },
  borderR: { borderRightWidth: borderWidth },
  borderB: { borderBottomWidth: borderWidth },
  borderL: { borderLeftWidth: borderWidth },
  borderHl: { borderWidth: StyleSheet.hairlineWidth },
  borderTHl: { borderTopWidth: StyleSheet.hairlineWidth },
  borderRHl: { borderRightWidth: StyleSheet.hairlineWidth },
  borderBHl: { borderBottomWidth: StyleSheet.hairlineWidth },
  borderLHl: { borderLeftWidth: StyleSheet.hairlineWidth },
});

/**
 * Generate border classes
 */
export default function(rem, borderWidth) {
  return {
    ...borderRadii(rem),
    ...borders(borderWidth),
  };
}
