export const setToggle=()=>{
    return{
    type:'TOGGLE_CART', 
    };
  
  
  
  };
  export const setCart=(item)=>{
    return{
    type:'ADD_TO_CART', 
    payload:item
    };
  
  
  
  };