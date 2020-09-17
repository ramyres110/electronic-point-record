const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json("ok");
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
