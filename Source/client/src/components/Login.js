import { Component } from "react";
import {Redirect } from "react-router-dom";
import ReactSession from 'react-client-session';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : null,
            password : null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email : this.state.email , Password : this.state.password})
        };
        fetch('http://localhost:7000/user/signin', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.length > 0) {
                    localStorage.setItem('user',data.Email);
                    this.props.history.push({pathname:"/chat",state:{user : data}});
                }
            });
      }
    render() {
        return (
            <div className="container d-flex h-100"> 
                <div className="container justify-content-center align-self-center">
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={(event) => this.setState({email: event.target.value})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input onChange={(event) => this.setState({password: event.target.value})} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button onClick={this.componentDidMount} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}
export default Login;