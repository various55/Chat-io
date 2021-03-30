import { Component } from "react";
import io from 'socket.io-client';
class ChatListItem extends Component{
    
    render() {
        return (
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div className="chat_ib">
                  <h5>{this.props.nameGroup} <span className="chat_date">Dec 25</span></h5>
                  <p>{this.props.nameGroup}</p>
                </div>
              <button onClick={this.props.joinRoom} className="btn btn-danger"></button>
              </div>
            </div>
        );
    }
}
export default ChatListItem;