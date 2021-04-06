var express = require('express');
var router = express.Router();
const room = require('../controllers/room.controller')
/* GET users listing. */
router.post('/FindByUser',room.FindByUser);
module.exports = router;
