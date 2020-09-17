const CheckpointModel = require('../models/checkpoint-model');

/**
 * listAllCheckpoints
 */
async function listAllCheckpoints() {
    const all = await CheckpointModel.findAll();
    return all;
}

/**
 * listCheckpointByUser
 * @param string usename 
 */
function listCheckpointByUser(usename) {

}

/**
 * saveCheckpoint
 * @param object checkpoint 
 */
function saveCheckpoint(checkpoint) {

}

/**
 * deleteCheckpoint
 * @param string id 
 */
function deleteCheckpoint(id) {

}

/**
 * changeCheckpoint
 * @param object checkpoint 
 */
function changeCheckpoint(checkpoint) {

}


module.exports = {
    listAllCheckpoints,
    listCheckpointByUser,
    saveCheckpoint,
    deleteCheckpoint,
    changeCheckpoint
}