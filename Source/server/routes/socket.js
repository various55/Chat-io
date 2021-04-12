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
        
        socket.on('newMessage', (data ,cb) => {
            console.log(data);
            io.sockets.in(data.room).emit('newMessage', {data: data, userSend: data.user.Username});
            cb(data);
        })
    
    });
}