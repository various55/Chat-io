import { Component } from 'react';
import ListRoom from './ListRoom';

class Room extends Component {
  joinRoom(){
    this.props.joinRoom();
  }
  
  method(){
    this.child.loadRoom();
  }
  render(){
    console.log('Render Room');
    return (
        <div className="inbox_people">
                  <div className="headind_srch">
                    <div className="recent_heading ">
                      <button type="button" className="btn btn-primary border-0" data-toggle="modal" data-target="#createRoom">
                       Tạo nhóm
                      </button>
                    </div>
                    <div className="srch_bar">
                      <div className="stylish-input-group">
                        <input type="text" className="search-bar"  placeholder="Search" />
                        <span className="input-group-addon">
                        <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                        </span> </div>
                    </div>
                  </div>
                  <ListRoom onRef={ref => this.child = ref} joinRoom={this.joinRoom.bind(this)} user={this.props.user}></ListRoom>
                </div>
                
      );
  }

};
export default Room;
