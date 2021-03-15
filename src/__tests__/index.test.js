/* eslint-env jest,node */
const { describe, test } = require('@jest/globals');

const index = require('../index');
const p = require('../../package');

describe('module index.js', () => {
  test('index exported as an object', () => {
    expect(typeof index).toBe('object');
  });
});

describe('geVersion', () => {
  test('getVersion is a function within index', () => {
    expect(typeof index.getVersion).toBe('function');
  });

  test('returns a string matching version from package.json', () => {
    expect(typeof index.getVersion()).toBe('string');
    expect(index.getVersion()).toBe(p.version);
  });
});
