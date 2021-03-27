import { Component } from "react";
import ListMessage from "./ListMessage";
import NewMessage from "./NewMessage";

class Room extends Component{
    render() {
        return (
            <div className="mesgs">
            <div>
              <h1>Room name</h1>
            </div>
            <ListMessage></ListMessage>
            <NewMessage></NewMessage>
            </div>
        
        );
    }
}

export default Room;