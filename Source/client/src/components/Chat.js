import { Component } from "react";
import ListMessage from "./ListMessage";
import NewMessage from "./InputMessage";
import io from 'socket.io-client';
import _map from 'lodash/map';

class Room extends Component{
    constructor(props) {
        super(props);
        this.state ={
            messages :[
            ],
            user: null,
        }
        //Khởi tạo state,
        this.socket = null;
    }
    componentWillMount() {
        this.user = localStorage.getItem('user');
        this.socket = io('localhost:7000');
        this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
        this.socket.on('newMessage', (response) => {this.newMessage(response)}); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
        this.socket.on('test',mess => {
                console.log(mess)}
            );

        this.testRoom();
        this.socket.on('join',mess =>console.log(mess));
        }
    testRoom(){
        console.log('ok');
            const data = {
                user: this.user,
                idRoom: 'Hello',
            }
            this.socket.emit('join',this.props.user,this.props.user);
            
    }
    newMessage(m){
    const messages = this.state.messages;
       let ids = _map(messages, 'id');
       let max = Math.max(...ids);
       let d = new Date();
       messages.push({
           id: max+1,
           userId: m.id,
           username: m.data.username,
           date: d.toLocaleString(),
           message: m.data.message
       });
        this.setState({

        })
    }
    sendnewMessage(m) {
        if (m.value) {
            const data = {
                message : m.value,
                username : 'vanh'
            }
            this.socket.emit("newMessage", data);
             //gửi event về server
            m.value = ""; 
        }
    }


    render() {
        return (
            <div className="mesgs">
            <div>
              <h1>Room name</h1>
            </div>
            <ListMessage user={this.state.user} messages={this.state.messages} typing={this.state.typing}></ListMessage>
            <NewMessage sendMessage={this.sendnewMessage.bind(this)}></NewMessage>
            </div>
        );
    }
}

export default Room;