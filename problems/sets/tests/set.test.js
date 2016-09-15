'use strict';

const solution = require('../prompts/set.js');
const expect = require('chai').expect;

describe('Sets', () => {
  var set;
  beforeEach(() => {
    set = new solution.Set();
  })
  describe('Set', () => {
    it('should have the methods add(), remove(), contains()', () => {
      expect(set.add).to.be.a('function');
      expect(set.remove).to.be.a('function');
      expect(set.contains).to.be.a('function');
    });

    it('should add values to a set', () => {
      expect(set.contains('First One')).to.be.equal(false);
      set.add('First One');
      set.add('Second One');
      expect(set.contains('First One')).to.be.equal(true);
      expect(set.contains('Second One')).to.be.equal(true);
    });

    it('should remove values to a set', () => {
      set.add('First One');
      expect(set.contains('First One')).to.be.equal(true);
      set.remove('First One');
      expect(set.contains('First One')).to.be.equal(false);
    });
  });
});