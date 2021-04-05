var express = require('express');
var router = express.Router();
const user = require('../controllers/user.controller')
const room = require('../controllers/room.controller')
/* GET users listing. */
router.get('/signin', (req, res) => {
  res.send("Home page. Server running okay.");
});
router.post('/signin',user.Login);
router.post('/getAll',user.findAll);
module.exports = router;
