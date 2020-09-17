const chai = require('chai');
const should = chai.should();

const app = require('../src/app');

describe("Testing App", () => {
    context("HTTP Server", () => {
        it("App should be Ok", () => {
            app.should.be.ok;
        });
    });
});