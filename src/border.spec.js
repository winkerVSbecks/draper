import test from 'ava';
import border from './border';
import { StyleSheet } from 'react-native';

const rem = 16;
const bw = 2;
const styles = border(rem, bw);

test('should generate rounded border classes', t => {
  t.truthy(styles.rounded);
  t.truthy(styles.rounded.borderRadius);
  t.truthy(styles.rounded6.borderRadius);
});

test('should generate zero border classes', t => {
  t.deepEqual(styles.border0, { borderWidth: 0 });
  t.deepEqual(styles.borderB0, { borderBottomWidth: 0 });
  t.deepEqual(styles.border0, { borderWidth: 0 });
});

test('should generate border width classes', t => {
  t.deepEqual(styles.border, { borderWidth: bw });
  t.deepEqual(styles.borderR, { borderRightWidth: bw });
});

test('should generate border hairline width classes', t => {
  t.deepEqual(styles.borderHl, {
    borderWidth: StyleSheet.hairlineWidth,
  });
  t.deepEqual(styles.borderLHl, {
    borderLeftWidth: StyleSheet.hairlineWidth,
  });
});
