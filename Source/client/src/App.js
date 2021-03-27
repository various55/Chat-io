import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import InboxPeople from './components/InboxPeople';
import Room from './components/Room';
import ModalNewRoom from './components/ModalNewRom'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="container">
          <h3 className=" text-center">Messenger</h3>
          <div className="messaging">
                <div className="inbox_msg">
                  <InboxPeople></InboxPeople>
                  <Room></Room>
                </div>
          </div>
          <ModalNewRoom></ModalNewRoom>
        </div>
      </div>
    );
  }
  
};
export default App;
