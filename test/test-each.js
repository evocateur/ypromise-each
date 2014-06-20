/*global describe, it */

var Promise = require('../');

describe('Promise.each', function () {
    it('is exposed as static method of Promise constructor');
    it('expects an array of values or promises');
    it('expects an iterator function');
    it('iterates over resolved values sequentially');
    it('resolves an array of resolved values');
    it('rejects when iterator throws an error');
    it('rejects when promised value rejects');
});
