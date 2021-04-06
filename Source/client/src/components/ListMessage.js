import { Component } from "react";
import RightMessage from "./RightMessage";
import LeftMessage from './LeftMessage'
class ListMessage extends Component{

    render() {
        var user = this.props.user;
        return (
            <div className="msg_history">
            {   
                this.props.messages.map(function(item,index){
                    if(item.userSend === user)
                        return <RightMessage key={index} username={item.username} user={item.userId} date={item.date} message={item.message}></RightMessage>
                    else 
                        return <LeftMessage key={index} username={item.username} user={item.userId} date={item.date} message={item.message}/>
                    }
                )
            }  
            </div>
        );
    }
}
export default ListMessage;