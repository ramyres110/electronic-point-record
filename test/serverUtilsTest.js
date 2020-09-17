const chai = require('chai');
const should = chai.should();

const { normalizePort } = require('../src/utils/serverUtils');

describe("Testing ServerUtils", () => {
    it("normalizePort should be Ok", () => {
        normalizePort.should.be.ok;
    });
    it("normalizePort for 3000 should be equal 3000", () => {
        normalizePort(3000).should.be.equal(3000);
    });
    it("normalizePort for AAA should be equal AAA", () => {
        normalizePort('AAA').should.be.equal('AAA');
    });
});