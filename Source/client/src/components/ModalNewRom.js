import { Component } from "react";

class ModalNewRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
        
      ],
      usersAdd: [

      ]
    }
  }
  componentWillMount(){
    const id = localStorage.getItem('userId');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:id})
    };
    fetch('http://localhost:7000/user/FindByUser', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({
            users : data
          })
        });
  }
  newRoom(){
    this.props.newRoom(this.roomName,this.state.usersAdd);
  }
  onChange(e) {
    // current array of options
    const usersAdd = this.state.usersAdd
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      usersAdd.push(+e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = usersAdd.indexOf(+e.target.value)
      usersAdd.splice(index, 1)
    }
    // update the state with the new array of options
    this.setState({ usersAdd: usersAdd })
  }

  render() {
    return (
      <div
        className="modal fade"
        id="createRoom"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tạo nhóm mới
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="usr">Tên nhóm:</label>
                <input ref={(roomName)=>{this.roomName=roomName}} type="text" className="form-control" id="usr"/>
              </div>
              <p>Thành viên</p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Seleted</th>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.users.map((item,index) =>{
                      return(
                        <tr key={index}>
                          <td><input value={item.Id} onChange={this.onChange.bind(this)} type="checkbox" name="seleted"/></td>
                          <th scope="row">{index+1}</th>
                          <td>{item.Email}</td>
                          <td>{item.Username}</td>
                        </tr>
                      )
                      }
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Hủy bỏ
              </button>
              <button onClick={this.newRoom.bind(this)} type="submit" className="btn btn-primary">
                Tạo nhóm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalNewRoom;
