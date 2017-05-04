/**
 * Created by himanshu on 1/5/17.
 */
import React from "react"; // Getting whole object
import {Home} from "./Home";
import Root from "./Root";
import Products from "./Products";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

// same as React.createClass, where we have to provider render function
export class App extends React.Component {
    // Overriding render
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"home"} component={Home}/>
                    <Route path={"products"} component={Products}/>
                </Route>
            </Router>
        );
    }
}

