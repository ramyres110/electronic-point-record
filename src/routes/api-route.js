const express = require('express');
const router = express.Router();

/** /checkout */
router.use('/checkout', require('./checkout-route'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json("ok");
});

module.exports = router;
