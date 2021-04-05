import { Component } from "react";
class SingleRoom extends Component{
    
  joinRoom(nameGroup){
    this.props.joinRoom(this.props.nameGroup);
  }
  
  render() {
      return (
          <div className="chat_list overlay "  onClick={this.joinRoom.bind(this)}>
            <div className="chat_people ">
              <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
              <div className="chat_ib">
                <h5>{this.props.nameGroup} <span className="chat_date">Dec 25</span></h5>
                <p>{this.props.nameGroup}</p>
              </div>
            </div>
          </div>
      );
  }
}
export default SingleRoom;