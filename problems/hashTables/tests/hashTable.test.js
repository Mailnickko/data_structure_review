'use strict';

const solution = require('../prompts/hashTable.js');
const should = require('chai').should();
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('HashTable', () => {
  var hashTable;
  describe('HashTable properties', () => {

    it('should exist and should be a function', () => {
      should.exist(solution.HashTable);
      solution.HashTable.should.be.a.Function;
    });

    it('should have the methods insert(), retrieve(), remove(), and resize()', () => {
      const hashTable = new solution.HashTable();
      should.exist(hashTable.insert);
      expect(hashTable.insert).to.be.a('function');
      should.exist(hashTable.retrieve);
      expect(hashTable.retrieve).to.be.a('function');
      should.exist(hashTable.remove);
      expect(hashTable.remove).to.be.a('function');
      should.exist(hashTable.resize);
      expect(hashTable.resize).to.be.a('function');
    });

    it('should return a hash table', () => {
      const hashTable = new solution.HashTable();
      hashTable.should.be.an.Object;
    });

    it('should retrieve a different instance of HashTable each time', () => {
      const hashTable = new solution.HashTable();
      should.exist(hashTable);

      const hashTable2 = new solution.HashTable();
      should.exist(hashTable2);

      hashTable.should.not.be.equal(hashTable2);
    });
  });

  describe('HashTable methods', () => {
    describe('the insert() method', () => {
      beforeEach(() => {
        hashTable = new solution.HashTable();
      });

      it('should store values that are inserted', () => {
        hashTable.insert('Test', 'Success');
        expect(hashTable.retrieve('Test')).to.equal('Success');
      });

      it('should update values if key already exists', () => {
        hashTable.insert('Test', 'WOOHOO');
        expect(hashTable.retrieve('Test')).not.to.equal('Success');
        expect(hashTable.retrieve('Test')).to.equal('WOOHOO');
      });
    });

    describe('the retrieve() method', () => {
      it('should return values of stored keys', () => {
        var grab = hashTable.retrieve('Test');
        expect(grab).to.equal('WOOHOO');
      });

      it('should return undefined for unknown keys', () => {
        var grab = hashTable.retrieve('Nonsense');
        expect(grab).to.equal(undefined);
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