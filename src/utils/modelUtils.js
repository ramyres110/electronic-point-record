const CheckpointModel = require('../models/checkpoint-model');

function migration(force) {
    if (!force) force = false;

    CheckpointModel.sync({ force });
}

module.exports = { migration }