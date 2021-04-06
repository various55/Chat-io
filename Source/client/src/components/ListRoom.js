import { Component } from "react";
import SingleRoom from "./SingleRoom";

class ListRoom extends Component{
    constructor(props){
        super(props);
        this.loadRoom = this.loadRoom.bind(this);
        this.socket = null;
        this.state = {
          peoples :[
          ]
        }
      }
      joinRoom(nameGroup){
        this.props.joinRoom()
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
        fetch('http://localhost:7000/Room/FindByUser', requestOptions)
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
                    {this.state.peoples.map( (item,index) => <SingleRoom key={index} joinRoom={this.joinRoom.bind(this)}  room={item} ></SingleRoom>)}
                </div>
            
        );
    }
}
export default ListRoom;