/**
 * Created by himanshu on 27/4/17.
 */
import React from "react";

export class View extends React.Component {
    render() {
        if(this.props.show) {
           return this.props.children;
        } else {
            return null;
        }
    }
}
