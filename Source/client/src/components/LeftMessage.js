import { Component } from "react";

class LeftMessage extends Component {
    render() {
        return (
        <div className="incoming_msg">
            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
            <div className="received_msg">
              <div className="text-justify text-info">{this.props.username}</div>
              <div className="received_withd_msg">
                <p className="text-justify text-dark">{this.props.message}</p>
                <span className="time_date"> {this.props.date}</span></div>
            </div>
        </div>
            
          
        );
    }
}
export default LeftMessage;
