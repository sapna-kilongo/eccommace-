const INITIAL_STATE={
    Products:[]
 
 }
 export const ProductsReducer=(state=INITIAL_STATE,action)=>{
     switch (action.type) {
         case 'SET_PRODUCTS':
             
           return { ...state,
            Products:action.payload  };
     
         default:
             return state;
     }


 }