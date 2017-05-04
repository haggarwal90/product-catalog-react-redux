/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import {View} from "./View";
import {Link, browserHistory} from "react-router";
import Modal from 'react-modal';
import {connect} from "react-redux";
//Statefull
class Header extends React.Component {

    inputEmail(event) {
        this.props.setEmail(event.target.value);
    }

    inputPassword(event) {
        this.props.setPassword(event.target.value);
    }

    validate() {
        let user = {
            username: this.props.email,
            password: this.props.password
        }

        let users = JSON.parse(localStorage.getItem('Users'));
        if (!users) {
            users = [];
        }
        let found = users.filter((element, index) => {
            return element.username == user.username && element.password == user.password;
        })
        debugger;
        if (found.length > 0) {
            /*this.setState({
             validated: true,
             openModal : !this.state.openModal
             }, function() {
             console.log('this.state.validated ',this.state.validated);
             localStorage.setItem('Validated',this.state.validated);
             })*/
            this.props.setValidated(!this.props.validated, !this.props.openModal);
            debugger;
            //this.props.onHeaderChange('Logout');
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
        this.props.setValidated(!this.props.validated, false);
        //this.props.onHeaderChange('Login');
        browserHistory.push('/');
    }

    toggleModalBox(type) {/*
     this.setState({
     openModal : !this.state.openModal
     })*/
        this.props.toggleModal(!this.props.openModal);
        this.props.setModalType(type);

    }

    signup() {/*
     this.setState({
     openModal : !this.state.openModal
     })*/
        //this.props.email == 'himanshu' && this.props.password == 'himanshu'
        let user = {
            username: this.props.email,
            password: this.props.password
        }

        let users = JSON.parse(localStorage.getItem('Users'));
        if (!users) {
            users = [];
        }
        let found = users.filter((element, index) => {
            return element.username == user.username && element.password == user.password;
        })
        debugger;
        if (found.length == 0) {
            users.push(user);
            localStorage.setItem('Users', JSON.stringify(users));
            this.props.setValidated(this.props.validated, !this.props.openModal);
        }

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
                            <li><Link to={"/home"} activeStyle={{color: "black"}}>Home</Link></li>
                            <View show={this.props.headername == 'Logout'}>
                                <li><Link to={"/products"} activeStyle={{color: "black"}}>Products</Link></li>
                            </View>
                            {/*<li onClick={this.login.bind(this)}><a href="#">{this.state.loginstate}</a></li>*/}
                            {/*<View show={this.props.headername == 'Login'}><li><Link to={"/login"} activeStyle={{color:"black"}}>{this.props.headername}</Link></li></View>*/}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <View show={this.props.headername == 'Login'}>
                                <li onClick={() => this.toggleModalBox("login")}><a
                                    style={{cursor: 'pointer'}}>Login</a></li>
                            </View>
                            <View show={this.props.headername == 'Login'}>
                                <li onClick={() => this.toggleModalBox("signup")}><a
                                    style={{cursor: 'pointer'}}>Signup</a></li>
                            </View>
                            <View show={this.props.headername == 'Logout'}>
                                <li onClick={this.logout.bind(this)}><a
                                    style={{cursor: 'pointer'}}>{this.props.headername}</a></li>
                            </View>
                        </ul>
                    </div>
                </nav>
                <Modal
                    isOpen={this.props.openModal}
                    contentLabel="Modal">
                    <View show={this.props.modaltype == 'login'}>
                        <div>
                            <h3>Login</h3>
                            <div className="form-group">
                                <label>Username:</label>
                                <input className="form-control" onChange={(event) => this.inputEmail(event)}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input className="form-control" onChange={(event) => this.inputPassword(event)}/>
                            </div>
                            <button className="btn btn-primary" onClick={this.validate.bind(this)}>Submit</button>
                            <button className="btn btn-primary" style={{margin: "1%"}}
                                    onClick={this.toggleModalBox.bind(this)}>Close
                            </button>
                        </div>
                    </View>
                    <View show={this.props.modaltype == 'signup'}>
                        <div>
                            <h3>Signup</h3>
                            <div className="form-group">
                                <label>Username:</label>
                                <input className="form-control" onChange={(event) => this.inputEmail(event)}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input className="form-control" onChange={(event) => this.inputPassword(event)}/>
                            </div>
                            <button className="btn btn-primary" onClick={this.signup.bind(this)}>Submit</button>
                            <button className="btn btn-primary" style={{margin: "1%"}}
                                    onClick={this.toggleModalBox.bind(this)}>Close
                            </button>
                        </div>
                    </View>
                </Modal>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('state is ', state);
    return {
        email: state.HeaderReducer.email,
        password: state.HeaderReducer.password,
        validated: state.HeaderReducer.validated,
        openModal: state.HeaderReducer.openModal,
        modaltype: state.HeaderReducer.modaltype
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (openmodal) => {
            dispatch({
                type: "TOGGLE_MODAL",
                payload: openmodal
            })
        },
        setValidated: (validated, openmodal) => {
            debugger;
            dispatch({
                type: "VALIDATED",
                payload: {validated, openmodal}
            })
        },
        setEmail: (email) => {
            dispatch({
                type: "SET_EMAIL",
                payload: email
            })
        },
        setPassword: (password) => {
            dispatch({
                type: "SET_PASSWORD",
                payload: password
            })
        },
        setModalType: (type) => {
            dispatch({
                type: "SET_MODAL_TYPE",
                payload: type
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
