import test from 'ava';
import dimensions from './dimensions';

test('should generate width and height classes', t => {
  const rem = 16;
  const styles = dimensions(rem);

  t.deepEqual(styles.h1, { height: 1 * rem });
  t.deepEqual(styles.h4, { height: 4 * rem });
  t.deepEqual(styles.w3, { width: 3 * rem });
  t.deepEqual(styles.w5, { width: 8 * rem });
});
