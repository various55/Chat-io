const Message = require('../controllers/message.controller')


module.exports = (io) => {   
    io.on('connection', function(socket){
        var username = {};
        console.log(socket.id + ': connected');
        
        socket.on('join',data=>{
            socket.join(data.roomId);
            io.in(data.roomId).emit('join','Chào mừng '+data.user.Username+'đã join vào '+data.roomId);
        })
    
        socket.on('disconnect', function(){
            console.log(socket.id + ': disconnected')
        })
        
        socket.on('newMessage', data => {
            Message.NewMessage(data.user.Id,data.room,data.message).then(res =>{
                data.user.Name = res[0][0]["NickName"];
                io.sockets.in(data.room).emit('newMessage', {user: data,message:data.message, userSend: data.user.Username});
            })
        })
    
    });
}