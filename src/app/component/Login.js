/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import {browserHistory} from "react-router";

export class Login extends React.Component {

    constructor() {
        super();
        let validated = localStorage.getItem('Validated');
        console.log('validated is ', validated);
        if (!validated) {
            validated = false;
        }
        this.state = {
            email: "",
            password: "",
            validated: validated
        }
        localStorage.setItem('Validated', this.state.validated);
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
        if (this.state.email == 'himanshu' && this.state.password == 'himanshu') {
            this.setState({
                validated: true
            }, function () {
                console.log('this.state.validated ', this.state.validated);
                localStorage.setItem('Validated', this.state.validated);
            })
            this.props.onHeaderChange('Logout');
            //browserHistory.push('/');
        }

    }


    render() {
        var isTrue = (this.state.validated == 'true' || this.state.validated == true);
        if (isTrue) {
            return (
                <div>Successfully Logged in!!</div>
            )
        } else {
            return (
                <div>
                    <div className="form-group">
                        <label>Username:</label>
                        <input className="form-control" onChange={(event) => this.inputEmail(event)}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" onChange={(event) => this.inputPassword(event)}/>
                    </div>
                    <button className="primary" onClick={this.validate.bind(this)}>Submit</button>
                </div>
            )
        }
    }
}
