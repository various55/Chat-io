const express = require('express')
const router = express.Router()
const user = require('./controllers/user.controller')
const room = require('./controllers/room.controller')
const message = require('./controllers/message.controller')

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }));
var app = express();

router.get('/', (req, res) => {
    res.send('server is up and running')
});
router.get('/user/signin', (req, res) => {
    res.send("Home page. Server running okay.");
  });
router.post('/user/signin',user.Login);
router.post('/user/getAll',user.findAll);
router.post('/user/FindByUser',user.FindByUser);
router.post('/room/FindByUser',room.FindByUser);
router.post('/message/FindByRoom',message.FindByRoom);
router.post('/room/createRoom',room.CreateRoom);


module.exports = router;