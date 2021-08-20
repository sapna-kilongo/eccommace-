const INITIAL_STATE={
    Products:[],
    Product:[]
 
 }
 export const ProductsReducer=(state=INITIAL_STATE,action)=>{
     switch (action.type) {
         case 'SET_PRODUCTS':
             
           return { ...state,
            Products:action.payload  };

         case 'SET_SELECTED_PRODUCT':
            return { ...state,
                Product:action.payload  };
         case 'REMOVE_SELECTED_PRODUCT':

            return {};
     
         default:
             return state;
     }


 }
 