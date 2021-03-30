import { Component } from "react";
import MyMessageItem from "./MyMessageItem";
import PeopleMessageItem from './PeopleMessageItem'
class ListMessage extends Component{

    render() {
        var user = this.props.user;
        return (
            <div className="msg_history">
            {   
                this.props.messages.map(function(item){
                    if(item.userId === user)
                        return <MyMessageItem key={item.id} username={item.username} user={item.userId} date={item.date} message={item.message}></MyMessageItem>
                    else 
                        return <PeopleMessageItem key={item.id} username={item.username} user={item.userId} date={item.date} message={item.message}/>
                    }
            )}  
            </div>
        );
    }
}
export default ListMessage;