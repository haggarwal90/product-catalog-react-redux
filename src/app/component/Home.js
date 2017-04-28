/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
//import { CreateProduct } from "./CreateProduct";

export class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to Moon!</h1>
                <p>bla bla bla ....</p>
            </div>
        );
    }
}

// Good Practice to have propTypes, it gives error in console but wont break the functionality
/*
Home.propTypes = {
    products : React.PropTypes.array
}*/
