/**
 * Created by himanshu on 3/5/17.
 */

let products = JSON.parse(localStorage.getItem('Products'));
if (!products) {
    products = [{"name": "Product one", "description": "Product one description"}, {
        "name": "Product two",
        "description": "Product two description"
    }, {"name": "Product three", "description": "Product three description"}];
    localStorage.setItem('Products', JSON.stringify(products));
}

export const ProductReducer = (state = {
    products: products,
    product: {
        name: "",
        description: ""
    },
    buttonlabel: "Add Product"
}, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            console.log('SET_PRODUCT is called')
            state = {
                ...state,
                product: action.payload.product,
                buttonlabel: action.payload.buttonlabel
            }
            break;
        case "SET_PRODUCTS":
            console.log('SET_PRODUCTS is called', JSON.stringify(action.payload.products))
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case "SET_PRODUCT_NAME":
            console.log('SET_PRODUCT_NAME is called')
            state = {
                ...state,
                product: {
                    ...state.product,
                    name: action.payload
                }
            }
            break;
        case "SET_PRODUCT_DESCRIPTION":
            console.log('SET_PRODUCT_DESCRIPTION is called')
            state = {
                ...state,
                product: {
                    ...state.product,
                    description: action.payload
                }
            }
            break;
    }
    console.log('new state  is ', JSON.stringify(state));
    return state;
}