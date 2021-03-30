import React, { useState } from "react";
import InboxPeople from './Room';
import Room from './Chat';
import ModalNewRoom from './ModalNewRom'
import { useLocation } from 'react-router-dom';

const AppChat = () => {
    const location = useLocation();
    let u = location.state.user[0];
    const [user, setUser] = useState(u);
    
    return (
      <div className="App">
        <div className="container">
          <h3 className=" text-center">Messenger</h3>
          <div className="messaging">
                <div className="inbox_msg">
                  <InboxPeople user={u.Id}></InboxPeople>
                  <Room user={user.Name}></Room>
                </div>
          </div>
          <ModalNewRoom></ModalNewRoom>
        </div>
      </div>
    );
};
  
export default AppChat;
