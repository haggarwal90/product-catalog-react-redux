/**
 * Created by himanshu on 3/5/17.
 */


let validated = localStorage.getItem('Validated');
console.log('validated is ',validated);
if(!validated) {
    validated = false;
}
localStorage.setItem('Validated',validated);

export const HeaderReducer = (state = {
    email : "",
    password : "",
    validated  : validated,
    openModal : false
}, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            state =  {
                ...state,
                openModal: action.payload
            }
            break;
        case "VALIDATED":
            debugger;
            state =  {
                ...state,
                openModal: action.payload.openmodal,
                validated: action.payload.validated
            }
            console.log('Updating Validated ',action.payload.validated);
            localStorage.setItem('Validated',action.payload.validated);
            break;
        case "SET_EMAIL":
            state =  {
                ...state,
                email: action.payload
            }
            break;
        case "SET_PASSWORD":
            state =  {
                ...state,
                password: action.payload
            }
            break;
    }
    return state;
}
