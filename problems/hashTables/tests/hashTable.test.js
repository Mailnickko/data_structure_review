'use strict';

const solution = require('../prompts/hashTable.js');
const should = require('chai').should();
const assert = require('chai').assert;

describe('HashTable', () => {
  describe('HashTable properties', () => {

    it('should exist and should be a function', () => {
      should.exist(solution.HashTable);
      solution.HashTable.should.be.a.Function;
    });

    it('should have the methods insert(), retrieve(), remove(), and resize()', () => {

    });

    it('should return a hash table', () => {

    });

    it('should retrieve a different instance of HashTable each time', () => {

    });
  });

  describe('HashTable methods', () => {
    describe('the insert() method', () => {
      it('should store values that are inserted', () => {

      });

      it('should update values if key already exists', () => {

      });
    });

    describe('the retrieve() method', () => {
      it('should return values of stored keys', () => {

      });

      it('should return undefined for unknown keys', () => {

      });
    });

    describe('the remove() method', () => {
      it('should remove values', () => {

      });

      it('should return undefined for unknown keys', () => {

      });
    });

    describe('the resize() method', () => {
      it('should handle collisions', () => {

      });

      it('should be able to resize', () => {

      });
    });
  });
});