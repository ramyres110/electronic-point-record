const express = require('express');
const router = express.Router();

const CheckpointController = require('../controllers/checkpoint-control');

router.get('/', async (req, res, next) => {
    const all = await CheckpointController.listAllCheckpoints();
    res.json(all);
});

router.get('/:name', (req, res, next) => {
    res.json("ok");
});

router.post('/', async (req, res, next) => {
    const resp = await CheckpointController.saveCheckpoint();
    res.json(resp);
})

router.put('/', (req, res, next) => {
    res.json("ok");

})

router.delete('/', (req, res, next) => {
    res.json("ok");

})

module.exports = router;
