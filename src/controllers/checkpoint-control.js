const { checkConnection } = require('../configs/sequelize-config');
const CheckpointModel = require('../models/checkpoint-model');

/**
 * getById
 * @param {*} id 
 */
async function getById(id) {
    return await CheckpointModel.findByPk(id);
}

/**
 * listAllCheckpoints
 */
async function listAllCheckpoints() {
    return await CheckpointModel.findAll();
}

/**
 * listCheckpointByUser
 * @param string name 
 */
async function listCheckpointByUser(name) {
    return await CheckpointModel.findAll({ where: { name } });
}

/**
 * saveCheckpoint
 * @param object checkpoint 
 */
async function saveCheckpoint(name) {
    const lastPoint = await CheckpointModel.findOne({ where: { name }, order: [['createdAt', 'DESC']] });
    if (!lastPoint) {
        return await CheckpointModel.create({ name, type: "I" });
    }
    const type = (lastPoint.type.trim() === "I") ? "O" : "I";
    return await CheckpointModel.create({ name, type });
}

/**
 * deleteCheckpoint
 * @param string id 
 */
async function deleteCheckpoint(id) {
    return await CheckpointModel.destroy({ where: { id } });
}

/**
 * changeCheckpoint
 * @param object checkpoint 
 */
async function changeCheckpoint(id, checkpoint) {
    if (!id) {
        throw new Error('Id Not Found');
    }
    delete checkpoint.id;
    return await CheckpointModel.update({ ...checkpoint }, { where: { id } });
}


module.exports = {
    getById,
    listAllCheckpoints,
    listCheckpointByUser,
    saveCheckpoint,
    deleteCheckpoint,
    changeCheckpoint
}