import { Component } from "react";
import ChatListItem from "./SingleRoom";

class ChatList extends Component{
    constructor(props){
        super(props);
        this.loadRoom = this.loadRoom.bind(this);
        this.socket = null;
        this.state = {
          peoples :[
          ]
        }
      }
      componentWillMount() {
        this.loadRoom();
      }
      loadRoom(){
        var id = this.props.user;
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({id})
        };
        fetch('http://localhost:7000/Room/FindById', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                  peoples: data,
                })
                return data;
            });
        }
    render() {
        return (
                <div className="inbox_chat">
                    {this.state.peoples.map( (item,index) => <ChatListItem key={index} nameGroup={item.Name} ></ChatListItem>)}
                </div>
            
        );
    }
}
export default ChatList;