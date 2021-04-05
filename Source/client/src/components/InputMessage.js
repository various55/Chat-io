import { Component } from "react";


class InputMessage extends Component {
    checkEnter(e) {
        if (e.keyCode === 13) {
          this.props.sendMessage(this.messageInput);
        }
      }
    render() {
        return (
            <div className="type_msg">
            <div className="input_msg_write">
              <input ref={(messageInput)=>{this.messageInput=messageInput}} type="text" className="write_msg" placeholder="Type a message" onKeyUp={this.checkEnter.bind(this)} />
              <button onClick={()=>this.props.sendMessage(this.messageInput)} className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        
        );
    }
}
export default InputMessage;