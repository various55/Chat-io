import { Component } from "react";
import ChatListItem from "./ChatListItem";

class ChatList extends Component{
    render() {
        return (
            <div className="msg_history">
                <div className="inbox_chat">
                    <ChatListItem></ChatListItem>
                </div>
            </div>
        );
    }
}
export default ChatList;