/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Login } from "./Login";
import Modal from 'react-modal';


export class Root extends React.Component {

    constructor() {
        super();
        let validated = localStorage.getItem('Validated');
        var isTrue = (validated == 'true' || validated == true);
        this.state = {
            headername: isTrue? 'Logout' : 'Login'
        }
    }

    onChangeHeaderName(newName) {
        console.log('New Name is ',newName);
        this.setState({
            headername: newName
        })
    }
    // Overriding render
    render() {
        console.log('this.props.children ',this.props);
        /*if(this.props.location.pathname == '/login') {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Header headername={this.state.headername} onHeaderChange={this.onChangeHeaderName.bind(this)}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Login onHeaderChange={this.onChangeHeaderName.bind(this)}/>
                        </div>
                    </div>
                </div>
            );
        } else {*/
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Header headername={this.state.headername} onHeaderChange={this.onChangeHeaderName.bind(this)}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        //}
    }
}
