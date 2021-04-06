import React, { useState,useEffect } from "react";
import Room from './Room';
import Chat from './Chat';
import io from 'socket.io-client';
import _map from 'lodash/map';
import ModalNewRoom from './ModalNewRom'
import { useLocation } from 'react-router-dom';
let socket = io('localhost:7000');
const AppChat = () => {
    const location = useLocation();
    let u = location.state.user[0];
    const [user, setUser] = useState(u);
    const [users,setUsers] = useState([])
    const [messages,setMessages] = useState([])
    const [rooms,setRooms] = useState([])

    useEffect(()=> {
      console.log('Render..............')
      socket.on('newMessage', (response) => {
        newMessage(response);
      }); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
      /*
      socket.on('test',mess => {
              console.log(mess)}
      );
      socket.on('join',mess =>console.log(mess));
      */
      },[]
  )
      

    function testRoom(){
        const data = {
            user: user,
            idRoom: 'Hello ',
        }
        socket.emit('join',user,user);
    }
    function joinRoom(){
        console.log('Join room  ');
    }
    function newMessage(m){
      const d = new Date();
      const userData = m.data.user;
      const data = {
        id: userData.Id,
        userSend: m.userSend,
        username: userData.Username,
        name : userData.Name,
        date: d.toLocaleString(),
        message: m.data.message
      };
      messages.push(data);
      setMessages([...messages]);
    }
    const sendnewMessage = (m) => {
      if (m.value) {
          const data = {
              message : m.value,
              user : u,
          }
          socket.emit("newMessage", data);
           //gửi event về server
          m.value = ""; 
      } 
  }

    function joinRoom(){
      // Thực thi ...
      
      console.log('Join  room')
    }
    return (
      
      <div className="App">
        <div className="container">
          <h3 className=" text-center">Messenger</h3>
          <div className="messaging">
                <div className="inbox_msg">
                  <Room joinRoom={()=>joinRoom()} user={u.Id}></Room>
                  <Chat sendMessage={sendnewMessage} messages={messages} userSend={user.Username}></Chat>
                </div>
          </div>
          <ModalNewRoom></ModalNewRoom>
        </div>
      </div>
    );
};
  
export default AppChat;
