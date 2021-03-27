import { Component } from "react";
import MyMessageItem from "./MyMessageItem";
import PeopleMessageItem from './PeopleMessageItem'
class ListMessage extends Component{
    render() {
        return (
        <div className="msg_history">
            <PeopleMessageItem></PeopleMessageItem>
            <MyMessageItem></MyMessageItem>
            </div>
        );
    }
}
export default ListMessage;