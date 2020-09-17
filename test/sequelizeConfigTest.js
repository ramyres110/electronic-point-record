require('dotenv').config();

const chai = require('chai');
const should = chai.should();

const sequelize = require('../src/configs/sequelize-config');

describe("Testing Sequelize Config", () => {
    it("Sequelize should be Ok", () => {
        sequelize.should.be.ok;
    });
    it("Sequelize should be Ok", async () => {
        const resp = await sequelize.checkConnection();
        resp.should.be.true;
    });
});