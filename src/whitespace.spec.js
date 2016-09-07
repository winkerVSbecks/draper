import test from 'ava';
import whitespace from './whitespace';
import config from './config';

const styles = whitespace(config.scale);

test('should have ios margin top class', t => {
  t.deepEqual(styles.mtIOS, { marginTop: 20 });
});

test('should have whitespace classes', t => {
  t.truthy(styles.mb1);
  t.truthy(styles.mt4);
  t.truthy(styles.ml3);
  t.deepEqual(styles.m2, { margin: config.scale[2] });
  t.truthy(styles.pb4);
  t.truthy(styles.pl3);
  t.truthy(styles.pr2);
  t.truthy(styles.p1, { padding: config.scale[1] });
});
