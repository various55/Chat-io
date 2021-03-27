import logo from '../logo.svg';
import { Component } from 'react';
import ChatList from './ChatList';

class InboxPeople extends Component {
  render(){
    return (
        <div className="inbox_people">
                  <div className="headind_srch">
                    <div className="recent_heading ">
                      <button type="button" className="btn btn-primary border-0" data-toggle="modal" data-target="#createRoom">
                       new room
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
                  <ChatList></ChatList>
                </div>
                
      );
  }

};
export default InboxPeople;
