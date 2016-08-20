import test from 'ava';
import * as R from 'ramda';
import config from './config';
import {
  capitalize,
  mapKeys,
  textColors,
  bgColors,
  borderColors,
} from './colors';

test('capitalize > should capitalize the first character of a string',
  t => {
    t.is(capitalize('green'), 'Green');
    t.is(capitalize('Blue'), 'Blue');
    t.is(capitalize(0), 0);
  });

test('mapKeys > should map over the keys of an object',
  t => {
    const result = mapKeys(R.toUpper, { a: 1, b: 2, c: 3 });
    t.deepEqual(result, { A: 1, B: 2, C: 3 });
  });

test('textColors > should generate text color classes',
  t => {
    const styles = textColors(config.clrs);
    t.truthy(styles.red);
    t.truthy(styles.green);
    t.deepEqual(styles.blue, { color: config.clrs.blue });
  });

test('bgColors > should generate background color classes',
  t => {
    const styles = bgColors(config.clrs);
    t.truthy(styles.bgRed);
    t.truthy(styles.bgGreen);
    t.deepEqual(styles.bgBlue, { backgroundColor: config.clrs.blue });
  });

test('borderColors > should generate border color classes',
  t => {
    const styles = borderColors(config.clrs);
    t.truthy(styles.borderRed);
    t.truthy(styles.borderGreen);
    t.deepEqual(styles.borderBlue, { borderColor: config.clrs.blue });
  });
