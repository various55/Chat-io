import { Component } from "react";
import ListMessage from "./ListMessage";
import InputMessage from "./InputMessage";

class Chat extends Component{
    constructor(props) {
        super(props);
    }
    sendMessage(m) {
        this.props.sendMessage(m);
    }


    render() {
        console.log('Render Chat');

        return (
            <div className="mesgs">
            <div>
              <h1>Room name</h1>
            </div>
            <ListMessage user={this.props.userSend} messages={this.props.messages}></ListMessage>
            <InputMessage sendMessage={this.sendMessage.bind(this)}></InputMessage>
            </div>
        );
    }
}

export default Chat;