/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import CreateProduct  from "./CreateProduct";
import ReactTable from 'react-table';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {browserHistory} from "react-router";
import {connect} from "react-redux";

// Create some column definitions
const columns = [{
    header: 'Product',
    columns: [{
        header: 'Product Name',
        accessor: 'name'
    }, {
        header: 'Product Description',
        accessor: 'description'
    }]
}];

/*const selectRowProp = {
 mode: 'radio'
 };*/

class Products extends React.Component {
    constructor(props) {
        super();
    }

    editProducts(product) {
        console.log('product is ', JSON.stringify(product));
        let tempproducts = this.props.products;
        if (this.props.buttonlabel == 'Add Product') {
            /*let product = {
             name : "Product one",
             description : "Product one description"
             };*/

            tempproducts.push(product);
            /*this.setState({
             products: tempproducts
             });*/
            this.props.setProducts(tempproducts);
        } else {
            tempproducts[this.props.product.location] = product;
            /*this.setState({
             products: tempproducts
             });*/
            this.props.setProducts(tempproducts);
        }
        console.log('tempproducts is ', JSON.stringify(tempproducts));
        localStorage.setItem('Products', JSON.stringify(tempproducts));

        /*this.setState({
         product : {
         name : "",
         description : ""
         },
         buttonlabel : "Add Product"
         });*/
        this.props.setProduct({
            name: "",
            description: ""
        }, "Add Product");

        this.forceUpdateHandler();
    }

    deleteProducts(product) {
        console.log('deleteProducts is ', JSON.stringify(product));
        let tempproducts = this.props.products;
        let location = product.location;
        debugger;
        if (location) {
            tempproducts.splice(location, 1);
            this.props.setProducts(tempproducts);

            localStorage.setItem('Products', JSON.stringify(tempproducts));

            this.props.setProduct({
                name: "",
                description: ""
            }, "Add Product");

            this.forceUpdateHandler();
        }
    }

    forceUpdateHandler() {
        //browserHistory.push("/products");
        window.location.reload();
        /*console.log('Forceupdatehandler calling');
         this.forceUpdate(function() {
         this.render();
         console.log('Forceupdatehandler called');
         });*/
    };

    getProduct(index) {
        let product = this.props.products[index];
        product.location = index;
        // reducer to set product
        /*this.setState({
         product: product,
         buttonlabel : "Edit Product"
         });*/
        this.props.setProduct(product, "Edit Product");
        console.log('Edit Product called ', index, product);

    }

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
            <div>
                <div>
                    <h3>Play with the products</h3>
                    <ReactTable
                        className='-striped -highlight'
                        data={this.props.products}
                        columns={columns}
                        defaultPageSize={5}
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: e => {
                                    console.log('It was in this column:', column)
                                    console.log('It was in this row:', rowInfo)
                                    this.getProduct(rowInfo.index)
                                }
                            }
                        }}
                    />
                </div>
                <hr/>
                {/*<CreateProduct product={this.props.product} buttonlabel={this.props.buttonlabel} editproductmethod={this.editProducts.bind(this)}/>*/}
                <CreateProduct buttonlabel={this.props.buttonlabel} editproductmethod={this.editProducts.bind(this)}
                               deletProductMethod={this.deleteProducts.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.ProductReducer.products,
        product: state.ProductReducer.product,
        buttonlabel: state.ProductReducer.buttonlabel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product, label) => {
            dispatch({
                type: "SET_PRODUCT",
                payload: {
                    product: product,
                    buttonlabel: label
                }
            });
        },
        setProducts: (products) => {
            dispatch({
                type: "SET_PRODUCTS",
                payload: {
                    products: products
                }
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

