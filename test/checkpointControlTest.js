const chai = require('chai');
const should = chai.should();

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