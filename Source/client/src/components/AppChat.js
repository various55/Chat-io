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
  const [room,setRoom] = useState()
    useEffect(()=> {
      socket.on('newMessage', (response) => {
        newMessage(response);
      }); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
      },[]
  )
    function newMessage(m){
      const d = new Date();
      const userData = m.user.user;
      const data = {
        CreateDate:d.toLocaleString(),
        MessageContent:m.message,
        NickName:userData.Name,
        UserIDCreate: userData.Id
      };
      setMessages(messages =>[...messages,data]);
    }
    const sendnewMessage = (m) => {
      if (m.value) {
          const roomId = localStorage.getItem('room');
          const d = new Date();
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
        });
    const data ={
      user : u,
      roomId:id
    }
    socket.emit('join',data);
  }
  function newRoom(name,users) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({Name: name.value,CreateBy:u.Id ,Users: users,Username:u.Name})
    };
    fetch('http://localhost:7000/room/CreateRoom', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
  }
    return (
      
      <div className="App">
        <div className="container">
          <h3 className=" text-center">Username: {u.Username}</h3>
          <div className="messaging">
                <div className="inbox_msg">
                  <Room joinRoom={()=>joinRoom()} user={u.Id}></Room>
                  <Chat sendMessage={sendnewMessage} messages={messages} userSend={user.Id}></Chat>
                </div>
          </div>
          <ModalNewRoom newRoom={newRoom} ></ModalNewRoom>
        </div>
      </div>
    );
};
  
export default AppChat;
