/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";

export class CreateProduct extends React.Component{
    constructor(props) {
        console.log('prop is ',props);
        super();
        this.state = {
            childproduct : props.product
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps is ',nextProps);
        this.setState({
            childproduct : nextProps.product
        })
    }

    changeCurrentProductName(event) {
        //console.log('event is ',event.target.value);
        var temp = this.state.childproduct;
        temp['name'] = event.target.value
        this.setState({
            childproduct : temp
        });
    }

    changeCurrentProductDescription(event) {
        //console.log('event is ',event.target.value);
        var temp = this.state.childproduct;
        temp['description'] = event.target.value
        this.setState({
            childproduct : temp
        });
    }

    editproductmethod() {
        console.log('this.state.childproduct ',this.state.childproduct);
        this.props.editproductmethod(this.state.childproduct);

    }



    render() {
        return (
            <div>
                <h3>{this.props.buttonlabel}</h3>
                <div className="row productmargin">
                    <div className="col-md-6">
                        <label className="productmargin">Product Name</label>
                    </div>
                    <div className="col-md-6">
                        <input className="productmargin" type="text" value={this.state.childproduct.name} onChange={(event) => this.changeCurrentProductName(event)}></input>
                    </div>
                </div>
                <div className="row" style={{marginBottom: 2 + '%'}}>
                    <div className="col-md-6">
                        <label className="productmargin">Product Description</label>
                    </div>
                    <div className="col-md-6">
                        <input className="productmargin" type="text"  value={this.state.childproduct.description}  onChange={(event) => this.changeCurrentProductDescription(event)}></input>
                    </div>
                </div>
                <button onClick={this.editproductmethod.bind(this)} className="primary">{this.props.buttonlabel}</button>
            </div>
        )
    }
}
