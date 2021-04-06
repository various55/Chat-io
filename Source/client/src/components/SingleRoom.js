import { Component } from "react";
class SingleRoom extends Component{
    
  joinRoom(nameGroup){
    localStorage.setItem("room", this.props.room.IDGroup);
    this.props.joinRoom(this.props.nameGroup);
  }
  
  render() {
    const room = this.props.room;
    return (
        <div className="chat_list overlay "  onClick={this.joinRoom.bind(this)}>
          <div className="chat_people ">
            <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
            <div className="chat_ib">
              <h5>{room.Name} <span className="chat_date">{room.LastUpdate}</span></h5>
              <p>{room.Name}</p>
            </div>
          </div>
        </div>
    );
  }
}
export default SingleRoom;