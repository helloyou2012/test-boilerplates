'use strict';

import test from 'ava';
import { add, syncRun } from '../src';

test('add', t => {
  t.is(add(1, 2), 3);
});

test('syncRun', async t => {
  t.is(await syncRun(), 1);
});