const express = require('express');
const usersRouter = require('./users');
const cors = require('cors');
const router = require('../router');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 7000);
const bodyParser = require('body-parser');

app.use(cors());
app.use(router);

server.listen(port, () => console.log('Server running in port ' + port));


io.on('connection', function(socket){

  socket.on('join',idRoom=>{
    socket.join(idRoom);
    io.sockets.emit('message', 'join nhóm');
    console.log(idRoom);  
    io.to('Hllo').emit('test');
  })

  var username = {};
  socket.emit('id', socket.id);  
  console.log(socket.id + ': connected');
  
  socket.on('newUser',function(data) {
    console.log(data);
  })

  socket.on('disconnect', function(){
    console.log(socket.id + ': disconnected')
  })

  socket.on('newUser',function(data) {
    socket.username = data;
  })
  
  socket.on('newMessage', data => {
    data.username = socket.username;
    io.sockets.emit('newMessage', {data: data, id: socket.id});
    console.log(socket.id)
  })

});



