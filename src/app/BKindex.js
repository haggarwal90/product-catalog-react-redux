/**
 * Created by himanshu on 26/4/17.
 */
import './styles/style.css';
import './../../node_modules/react-table/react-table.css';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';
import React from "react"; // Getting whole object
import {render} from "react-dom"; // Getting render key from the ReactDom
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Root } from "./component/Root";
import { Products } from "./component/Products";
import { Login } from "./component/Login";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
//import Perf from 'react-addons-perf';

//Perf.start();

// same as React.createClass, where we have to provider render function
class App extends React.Component {
    // Overriding render
    render() {
        /*var products = [
            {
                name : "Product one",
                description : "Product one description"
            },
            {
                name : "Product two",
                description : "Product two description"
            },
            {
                name : "Product three",
                description : "Product three description"
            }
        ];*/
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"home"} component={Home}/>
                    <Route path={"products"} component={Products}/>
                    {/*<Route path={"login"} component={Login}/>*/}
                </Route>
            </Router>
            /*<div className="container">
                <div className="row">
                    <div className="col">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Home products={products}/>
                    </div>
                </div>
            </div>*/
        );
    }
}

// render from ReactDom , we need to pass react component and the container id
render(<App/>,document.getElementById('myApp'));


//Perf.stop();
//Perf.getLastMeasurements();
//Perf.printInclusive();
//Perf.printWasted();



