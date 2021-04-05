module.exports = (io) => {   
    io.on('connection', function(socket){
        var username = {};
        console.log(socket.id + ': connected');
        
        socket.on('join',(user,idRoom)=>{
        socket.join(idRoom);
        console.log(user + idRoom);
        io.in(idRoom).emit('join','Chào mừng '+user+'đã join vào '+idRoom);
        })
    
        socket.on('disconnect', function(){
        console.log(socket.id + ': disconnected')
        })
        
        socket.on('newMessage', data => {
            console.log(data);
            io.sockets.emit('newMessage', {data: data, userSend: data.user.Username});
        })
    
    });
}