import { Component } from "react";

class MyMessageItem extends Component {
    render() {
        return (
            <div className="outgoing_msg">
            <div className="sent_msg">
              <p>{this.props.message}</p>
              <span className="time_date"> {this.props.date}</span> </div>
          </div>
          
        );
    }
}
export default MyMessageItem;
