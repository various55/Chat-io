import React, { useState, useEffect } from "react";
import InboxPeople from './InboxPeople';
import Room from './Room';
import ModalNewRoom from './ModalNewRom'
import { useHistory,useLocation } from 'react-router-dom';
import io from "socket.io-client";

let socket;
const AppChat = () => {
    const location = useLocation();
    let u = location.state.user[0];
    const [user, setUser] = useState(u);
    localStorage.setItem('user',u.Id);
    
    return (
      <div className="App">
        <div className="container">
          <h3 className=" text-center">Messenger</h3>
          <div className="messaging">
                <div className="inbox_msg">
                  <InboxPeople></InboxPeople>
                  <Room></Room>
                </div>
          </div>
          <ModalNewRoom></ModalNewRoom>
        </div>
      </div>
    );
};
  
export default AppChat;
