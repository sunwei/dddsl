// const test = require('ava');

import test from 'ava';
import ddd from '../dddsl'

test('foo', t => {
  let test = ddd();
  console.log(test);
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
