const express = require('express');
const router = express.Router();

const sequelize = require('../configs/sequelize-config');

/** /checkout */
router.use('/checkpoint', require('./api-checkpoint-route'));

/* GET home page. */
router.get('/', async function (req, res) {
    const resp = await sequelize.checkConnection();
    if (!resp) {
        return res.json("Not Ok");
    }
    res.json("ok");
});

module.exports = router;
