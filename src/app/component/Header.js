/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import { View } from "./View";
import { Link, browserHistory } from "react-router";
import Modal from 'react-modal';

//Statefull
export class Header extends React.Component {
    constructor(props) {
        super();

        let validated = localStorage.getItem('Validated');
        console.log('validated is ',validated);
        if(!validated) {
            validated = false;
        }
        this.state = {
            email : "",
            password : "",
            validated  : validated,
            openModal : false
        }
        localStorage.setItem('Validated',this.state.validated);
    }


    inputEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    inputPassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    validate() {
        if(this.state.email == 'himanshu' && this.state.password == 'himanshu') {
            this.setState({
                validated: true,
                openModal : !this.state.openModal
            }, function() {
                console.log('this.state.validated ',this.state.validated);
                localStorage.setItem('Validated',this.state.validated);
            })
            this.props.onHeaderChange('Logout');
            //browserHistory.push('/');
        }

    }

    /*componentWillReceiveProps(nextProps) {
        console.log('nextProps is ',nextProps);
        this.setState({
            headername : nextProps.headername
        })
    }*/
    /*login() {
        console.log('login called');
        alert(this.state.loginstate);
        if(this.state.status) {
            this.setState({
                loginstate : "Log In",
                status : 0
            })
        } else {
            this.setState({
                loginstate : "Logout",
                status : 1
            })
        }
    }*/

    /*componentWillReceiveProps(nextProps) {
        console.log('nextProps is ',nextProps);
        this.setState({
            loginstate : nextProps.headername
        })
    }*/

    /*changeLoginState() {
        console.log('login called');
        if(this.state.status) {
            this.setState({
                loginstate : "Login",
                status : 0
            })
        } else {
            this.setState({
                loginstate : "Logout",
                status : 1
            })
        }
    }*/

    logout() {
        console.log('Logout called');
        localStorage.removeItem('Validated');
        /*this.setState({
            headername : 'Login'
        })*/
        this.props.onHeaderChange('Login');
        browserHistory.push('/');
    }

    login() {
        this.setState({
            openModal : !this.state.openModal
        })

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Moon</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to={"/home"} activeStyle={{color:"black"}}>Home</Link></li>
                            <View show={this.props.headername == 'Logout'}><li><Link to={"/products"} activeStyle={{color:"black"}}>Products</Link></li></View>
                            {/*<li onClick={this.login.bind(this)}><a href="#">{this.state.loginstate}</a></li>*/}
                            {/*<View show={this.props.headername == 'Login'}><li><Link to={"/login"} activeStyle={{color:"black"}}>{this.props.headername}</Link></li></View>*/}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <View show={this.props.headername == 'Login'}><li onClick={this.login.bind(this)}><a style={{cursor: 'pointer'}}>Login</a></li></View>
                            <View show={this.props.headername == 'Logout'}><li onClick={this.logout.bind(this)}><a style={{cursor: 'pointer'}}>{this.props.headername}</a></li></View>
                        </ul>
                    </div>
                </nav>
                <Modal
                    isOpen={this.state.openModal}
                    contentLabel="Modal">
                    <div>
                        <div className="form-group">
                            <label>Username:</label>
                            <input className="form-control" onChange={(event) => this.inputEmail(event)}/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" onChange={(event) => this.inputPassword(event)}/>
                        </div>
                        <button className="btn btn-primary" onClick={this.validate.bind(this)}>Submit</button>
                        <button className="btn btn-primary" style={{margin : "1%"}} onClick={this.login.bind(this)}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

//Stateless

/*export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Moon</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                </ul>
            </div>
        </nav>
    );
}*/
