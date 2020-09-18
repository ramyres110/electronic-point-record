const express = require('express');
const router = express.Router();

const CheckpointController = require('../controllers/checkpoint-control');

router.get('/', async (req, res, next) => {
    const all = await CheckpointController.listAllCheckpoints();
    res.json(all);
});

router.get('/:name', async (req, res, next) => {
    const list = await CheckpointController.listCheckpointByUser(req.params.name);
    res.json(list);
});

router.post('/', async (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json('Bad Request');
    }
    const resp = await CheckpointController.saveCheckpoint(req.body.name);
    res.json(resp);
})

router.put('/:id', async (req, res, next) => {
    await CheckpointController.changeCheckpoint(req.params.id, req.body);
    const resp = await CheckpointController.getById(req.params.id);
    res.json(resp);
})

router.delete('/:id', async (req, res, next) => {
    const resp = await CheckpointController.deleteCheckpoint(req.params.id);
    res.json(resp);
})

module.exports = router;
