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
                    if(item.UserIDCreate === user)
                        return <RightMessage key={index} username={item.NickName} user={item.userId} date={item.CreateDate} message={item.MessageContent}></RightMessage>
                    else 
                        return <LeftMessage key={index} username={item.NickName} user={item.userId} date={item.CreateDate} message={item.MessageContent}/>
                    }
                )
            }  
            </div>
        );
    }
}
export default ListMessage;