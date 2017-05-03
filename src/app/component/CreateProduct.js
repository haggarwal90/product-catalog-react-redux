/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import {connect} from "react-redux";

class CreateProduct extends React.Component {

    /*componentWillReceiveProps(nextProps) {
     console.log('nextProps is ',nextProps);
     this.setState({
     childproduct : nextProps.product
     })
     }
     */
    changeCurrentProductName(event) {
        console.log('event is ', event.target.value);
        this.props.setProductName(event.target.value);
        /*var temp = this.state.childproduct;
         temp['name'] = event.target.value*/
        /*this.setState({
         childproduct : temp
         });*/
    }

    changeCurrentProductDescription(event) {
        console.log('event is ', event.target.value);
        this.props.setProductDescription(event.target.value);
        /*var temp = this.state.childproduct;
         temp['description'] = event.target.value*/
        /*this.setState({
         childproduct : temp
         });*/
    }

    editproductmethod(input) {
        //console.log('this.state.childproduct ',this.state.childproduct);
        this.props.editproductmethod(this.props.product);
    }


    render() {
        /*let productnameInput,productdescriptionInput = null;*/
        return (
            <div>
                <h3>{this.props.buttonlabel}</h3>
                <div className="row productmargin">
                    <div className="col-md-6">
                        <label className="productmargin">Product Name</label>
                    </div>
                    <div className="col-md-6">
                        <input className="productmargin" type="text" value={this.props.product.name}
                               onChange={(event) => this.changeCurrentProductName(event)}></input>
                    </div>
                </div>
                <div className="row" style={{marginBottom: 2 + '%'}}>
                    <div className="col-md-6">
                        <label className="productmargin">Product Description</label>
                    </div>
                    <div className="col-md-6">
                        <input className="productmargin" type="text" value={this.props.product.description}
                               onChange={(event) => this.changeCurrentProductDescription(event)}></input>
                    </div>
                </div>
                <button onClick={this.editproductmethod.bind(this)}
                        className="primary">{this.props.buttonlabel}</button>
                {/*<form onSubmit={e => {
                 // Prevent request
                 e.preventDefault();
                 // Assemble inputs
                 var input = {name: productnameInput.value, description: productdescriptionInput.value};
                 // Call handler
                 this.editproductmethod(input);
                 // Reset form
                 e.target.reset();
                 }}>
                 <input type="text" value={this.props.product.name} name="productname" ref={node => productnameInput = node}/>
                 <input type="text"  value={this.props.product.description} name="productdescription" ref={node => productdescriptionInput = node}/>
                 <input type="submit" />
                 </form>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state is ', state);
    return {
        product: state.ProductReducer.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductName: (name) => {
            dispatch({
                type: "SET_PRODUCT_NAME",
                payload: name
            });
        },
        setProductDescription: (description) => {
            dispatch({
                type: "SET_PRODUCT_DESCRIPTION",
                payload: description
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
