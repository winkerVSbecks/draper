import test from 'ava';
import config from './config';
import { fontSizes, weights, fontStyles } from './typography';

test('should have weights classes', t => {
  t.truthy(weights.normal);
  t.truthy(weights.bold);
  t.truthy(weights.fw1);
  t.truthy(weights.fw2);
  t.truthy(weights.fw3);
  t.truthy(weights.fw4);
  t.truthy(weights.fw5);
  t.truthy(weights.fw6);
  t.truthy(weights.fw7);
  t.truthy(weights.fw8);
  t.truthy(weights.fw9);
});

test('should have font style classes', t => {
  t.truthy(fontStyles.italic);
  t.truthy(fontStyles.left);
  t.truthy(fontStyles.center);
  t.truthy(fontStyles.right);
  t.truthy(fontStyles.justify);
  t.truthy(fontStyles.textAlignVertical);
});

test('should generate font size classes', t => {
  const styles = fontSizes(config.typeScale);
  t.deepEqual(styles.f1, { fontSize: config.typeScale.f1 });
  t.deepEqual(styles.f2, { fontSize: config.typeScale.f2 });
  t.deepEqual(styles.f3, { fontSize: config.typeScale.f3 });
  t.deepEqual(styles.f4, { fontSize: config.typeScale.f4 });
  t.deepEqual(styles.f5, { fontSize: config.typeScale.f5 });
  t.deepEqual(styles.f6, { fontSize: config.typeScale.f6 });
});
