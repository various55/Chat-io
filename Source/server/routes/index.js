const express = require('express');
const cors = require('cors');
const router = require('../router');
const bodyParser = require('body-parser');
const usersRouter = require('./userRouter')
const roomRouter = require('./roomRouter')
const indexRouter = require('./indexRouter')

// local
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const socket = require('./socket')(io)
const port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 7000);


app.use(cors());
app.use(router);

server.listen(port, () => console.log('Server running in port ' + port));





