import { Component } from "react";
import MyMessageItem from "./RightMessage";
import PeopleMessageItem from './LeftMessage'
class ListMessage extends Component{

    render() {
        var user = this.props.user;
        return (
            <div className="msg_history">
            {   
                this.props.messages.map(function(item,index){
                    if(item.userId === user)
                        return <MyMessageItem key={index} username={item.username} user={item.userId} date={item.date} message={item.message}></MyMessageItem>
                    else 
                        return <PeopleMessageItem key={index} username={item.username} user={item.userId} date={item.date} message={item.message}/>
                    }
            )}  
            </div>
        );
    }
}
export default ListMessage;