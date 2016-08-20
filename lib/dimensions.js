/**
 * Heights
 */
const heights = rem => ({
  h1: { height: 1 * rem },
  h2: { height: 2 * rem },
  h3: { height: 3 * rem },
  h4: { height: 4 * rem },
  h5: { height: 8 * rem },
  h6: { height: 16 * rem },
});

/**
 * Widths
 */
const widths = rem => ({
  w1: { width: 1 * rem },
  w2: { width: 2 * rem },
  w3: { width: 3 * rem },
  w4: { width: 4 * rem },
  w5: { width: 8 * rem },
  w6: { width: 16 * rem },
});

/**
 * Generate dimension classes
 */
export default function(rem) {
  return {
    ...heights(rem),
    ...widths(rem),
  };
}
