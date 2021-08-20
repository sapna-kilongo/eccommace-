const INITIAL_STATE={
    hidden:true,
    cart:[]
 
 }
 
 export const CartReducer=(state=INITIAL_STATE,action)=>{
       switch (action.type) {
           case 'TOGGLE_CART':
               return {...state,hidden:!state.hidden};
            case 'ADD_TO_CART':
                return {...state, cart:[...state.cart, action.payload]}   
       
           default:
               return state; 
       }



 }