'use strict';

jest.unmock('../src');

import { add, syncRun } from '../src';

describe('Test: index.js', () => {
  it('should add return 3', () => {
    expect(add(1, 2)).toEqual(3);
  });
  it('should syncRun return 1', () => {
    return syncRun().then(data => {
      expect(data).toEqual(1);
    });
  });
});