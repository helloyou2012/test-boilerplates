'use strict';

import { expect } from 'chai';
import tman from 'tman';
import { add, syncRun } from '../src';

tman.describe('Test: index.js', () => {
  tman.it('should add return 3', () => {
    expect(add(1, 2)).to.equal(3);
  });
  tman.it('should syncRun return 1', (done) => {
    syncRun().then((data) => {
      expect(data).to.equal(1);
      done();
    });
  });
});