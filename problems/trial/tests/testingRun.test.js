'use strict';

const solution = require('../prompts/testingRun.js');
const assert = require('chai').assert;

describe('Trail', () => {
  describe('testingRun', () => {

    it('should return the input', () => {
      assert.equal(solution.testRun("This is a test"), "This is a test");
    });
  });
});
