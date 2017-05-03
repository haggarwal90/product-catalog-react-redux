import './styles/style.css';
import './../../node_modules/react-table/react-table.css';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';
import React from "react"; // Getting whole object
import {render} from "react-dom"; // Getting render key from the ReactDom
import { createStore, combineReducers } from "redux";
import {App} from "./component/App";
import {Provider} from "react-redux";
import { HeaderReducer } from "./reducer/HeaderReducer";
import { ProductReducer } from "./reducer/ProductReducer";

const store = createStore(combineReducers({ProductReducer, HeaderReducer}));
//const store = createStore(ProductReducer);
console.log('store.getState() ',store.getState());

//call callback on store update
store.subscribe(() => {
    console.log('Store updated ', store.getState());
})


//manual dispatch action
/*store.dispatch({
 type: "ADD",
 payload: 5
 })

 store.dispatch({
 type: "ADD",
 payload: 6
 })*/

//Throught Provider we connect store to our App
render(<Provider store={store}><App/></Provider>, document.getElementById('myApp'));