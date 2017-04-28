/**
 * Created by himanshu on 26/4/17.
 */
import React from "react";
import { CreateProduct } from "./CreateProduct";
import ReactTable from 'react-table';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { browserHistory } from "react-router";

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

const selectRowProp = {
    mode: 'radio'
};

export class Products extends React.Component {
    constructor(props) {
        super();
        let products = JSON.parse(localStorage.getItem('Products'));
        if(!products) {
            products = [{"name":"Product one","description":"Product one description"},{"name":"Product two","description":"Product two description"},{"name":"Product three","description":"Product three description"}];
            localStorage.setItem('Products',JSON.stringify(products));
        }
        this.state = {
            products : products,
            product : {
                name : "",
                description : ""
            },
            buttonlabel : "Add Product"
        };
    }

    editProducts(product) {
        let tempproducts = this.state.products;
        if (this.state.buttonlabel == 'Add Product') {
            /*let product = {
                name : "Product one",
                description : "Product one description"
            };*/

            tempproducts.push(product);
            this.setState({
                products: tempproducts
            });
        } else {
            tempproducts[this.state.product.location] = product;
            this.setState({
                products: tempproducts
            });
        }
        localStorage.setItem('Products',JSON.stringify(tempproducts));

        this.setState({
            product : {
                name : "",
                description : ""
            },
            buttonlabel : "Add Product"
        });

        this.forceUpdateHandler();
    }

    forceUpdateHandler(){
        //browserHistory.push("/products");
        window.location.reload();
        /*console.log('Forceupdatehandler calling');
        this.forceUpdate(function() {
            this.render();
            console.log('Forceupdatehandler called');
        });*/
    };

    editProductSample(product) {
        console.log('editProductSample iss called',product);

    }

    getProduct(index) {
        let product = this.state.products[index];
        product.location = index;
        this.setState({
            product: product,
            buttonlabel : "Edit Product"
        });
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
                        data={this.state.products}
                        columns={columns}
                        defaultPageSize={5}
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: e => {
                                   //console.log('A Td Element was clicked!')
                                   //console.log('it produced this event:', e)
                                    console.log('It was in this column:', column)
                                    console.log('It was in this row:', rowInfo)
                                    //console.log('It was in this table instance:', instance)
                                    this.getProduct(rowInfo.index)
                                }
                            }
                        }}
                    />
                    {/*<BootstrapTable data={this.state.products} selectRow={ selectRowProp } striped hover>
                        <TableHeaderColumn isKey={true} dataField='name'>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='description'>Product Description</TableHeaderColumn>
                    </BootstrapTable>*/}
                   {/* <ul>
                        {this.state.products.map((product, index) => <li style={{cursor:'pointer'}} key={index} onClick={(event) => this.getProduct(index)}>{product.name}</li>)}
                    </ul>*/}
                </div>
                <hr/>
                <CreateProduct product={this.state.product} buttonlabel={this.state.buttonlabel} editproductmethod={this.editProducts.bind(this)}/>
            </div>
        );
    }
}