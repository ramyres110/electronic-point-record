const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

require('../src/utils/modelUtils').migration(false);

const { saveCheckpoint, listAllCheckpoints, listCheckpointByUser, changeCheckpoint, deleteCheckpoint } = require('../src/controllers/checkpoint-control');

describe("Testing Checkpoint Controller", () => {
    context("Testing List", () => {
        it("listAllCheckpoints should be Ok", () => {
            listAllCheckpoints.should.be.ok;
        });
        it("listCheckpointByUser should be Ok", () => {
            listCheckpointByUser.should.be.ok;
        });
    });

    context("Testing Save", () => {
        it("saveCheckpoint should be Ok", () => {
            saveCheckpoint.should.be.ok;
        });
        it("saveCheckpoint with params should be fulfilled", () => {
            saveCheckpoint('ramyres').should.be.fulfilled;
        });
    });

    context("Testing Change", () => {
        it("changeCheckpoint should be Ok", () => {
            changeCheckpoint.should.be.ok;
        });
    });

    context("Testing Delete", () => {
        it("deleteCheckpoint should be Ok", () => {
            deleteCheckpoint.should.be.ok;
        });
    });
});