import test from 'ava';
import build, { getConfig } from './build';

const config = {
  clrs: {
    mauve: '#E0B0FF',
  },
};
const s = build(config);

test('should build StyleSheet', t => {
  t.deepEqual(s.mauve, { color: config.clrs.mauve });
  t.deepEqual(s.bgMauve, { backgroundColor: config.clrs.mauve });
  t.deepEqual(s.borderMauve, { borderColor: config.clrs.mauve });
});

test('getConfig > should extend config with options', t => {
  t.deepEqual(getConfig({ rem: 32 }).rem, 32);
  t.deepEqual(getConfig({ borderWidth: 6 }).borderWidth, 6);
  t.is(getConfig(config).clrs.mauve, config.clrs.mauve);
  t.deepEqual(
    getConfig({ scale: [1, 2, 3, 4] }).scale,
    [16, 32, 48, 64]
  );
  t.deepEqual(
    getConfig({
      typeScale: {
        f2: 1.5,
        f3: 1.25,
      },
    }).typeScale, {
      f1: 32,
      f2: 24,
      f3: 20,
      f4: 16,
      f5: 14,
      f6: 12,
    });
  t.deepEqual(
    getConfig({
      lineHeightScale: {
        solid: 0.5,
        title: 2,
      },
    }).lineHeightScale, {
      solid: 0.5,
      title: 2,
      copy: 1.6,
    });
});
