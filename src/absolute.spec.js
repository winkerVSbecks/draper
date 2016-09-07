import test from 'ava';
import absolute from './absolute';

test('should generate absolute positioning classes', t => {
  const rem = 16;
  const styles = absolute(rem);

  t.deepEqual(styles.abs, { position: 'absolute' });
  t.deepEqual(styles.top1, { top: 1 * rem });
  t.deepEqual(styles.top2, { top: 2 * rem });
  t.deepEqual(styles.top3, { top: 3 * rem });
  t.deepEqual(styles.top4, { top: 4 * rem });
  t.deepEqual(styles.z1, { zIndex: 1, elevation: 1 });
});
