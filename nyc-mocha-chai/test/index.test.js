'use strict';

import { assert } from 'chai';
import { add, syncRun } from '../src';

describe('Test: index.js', () => {
  it('should add return 3', () => {
    assert.equal(add(1, 2), 3);
  });
  it('should syncRun return 1', (done) => {
    syncRun().then((data) => {
      assert(data, 1);
      done();
    });
  });
});