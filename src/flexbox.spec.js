import test from 'ava';
import flexbox from './flexbox';

test('should have flexbox classes', t => {
  t.truthy(flexbox.relative);
  t.deepEqual(flexbox.flx1, { flex: 1 });
  t.deepEqual(flexbox.flx2, { flex: 2 });
  t.deepEqual(flexbox.flx3, { flex: 3 });
  t.truthy(flexbox.flxCol);
  t.truthy(flexbox.flxRow);
  t.truthy(flexbox.flxWrap);
  t.truthy(flexbox.flxNoWrap);
  t.truthy(flexbox.itemsStart);
  t.truthy(flexbox.itemsCenter);
  t.truthy(flexbox.itemsEnd);
  t.truthy(flexbox.itemsStretch);
  t.truthy(flexbox.selfStart);
  t.truthy(flexbox.selfCenter);
  t.truthy(flexbox.selfEnd);
  t.truthy(flexbox.selfStretch);
  t.truthy(flexbox.jcStart);
  t.truthy(flexbox.jcEnd);
  t.truthy(flexbox.jcCenter);
  t.truthy(flexbox.jcBetween);
  t.truthy(flexbox.jcAround);
});
