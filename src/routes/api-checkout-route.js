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

router.post('/', (req, res, next) => {
    res.json("ok");

})

router.put('/', (req, res, next) => {
    res.json("ok");

})

router.delete('/', (req, res, next) => {
    res.json("ok");

})

module.exports = router;
