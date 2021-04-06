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
      console.log('Render'+messages.length);
      socket.on('newMessage', (response) => {
        newMessage(response);
      }); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
      /*
      socket.on('test',mess => {
              console.log(mess)}
      );
      */
      socket.on('join',mess =>console.log(mess));
        
      },[]
  )
    function newMessage(m){
      const d = new Date();
      const userData = m.data.user;
      const data = {
        CreateDate:d.toLocaleString(),
        IDChanel:'1',
        MessageContent:m.data.message,
        NickName:userData.Name,
        UserIDCreate: userData.Id
      };
      console.log('Length trước khi send '+messages.length);
      messages.push(data);
      setMessages([...messages]);
    }
    const sendnewMessage = (m) => {
      console.log('Lenth gửi '+messages.length);
      if (m.value) {
          const roomId = localStorage.getItem('room');
          const data = {
              message : m.value,
              user : u,
              room :roomId
          }
          socket.emit("newMessage", data);
           //gửi event về server
          m.value = ""; 
      } 
  }

  function joinRoom(){
    var id = localStorage.getItem("room");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id})
    };
    fetch('http://localhost:7000/message/FindByRoom', requestOptions)
        .then(response => response.json())
        .then(data => {
          setMessages(data);
          console.log('Test'+messages.length);
        });
    const data ={
      user : u,
      roomId:id
    }
    console.log('Join length:'+messages.length);
    socket.emit('join',data);
  }
    return (
      
      <div className="App">
        <div className="container">
          <h3 className=" text-center">Messenger</h3>
          <div className="messaging">
                <div className="inbox_msg">
                  <Room joinRoom={()=>joinRoom()} user={u.Id}></Room>
                  <Chat sendMessage={sendnewMessage} messages={messages} userSend={user.Id}></Chat>
                </div>
          </div>
          <ModalNewRoom></ModalNewRoom>
        </div>
      </div>
    );
};
  
export default AppChat;
