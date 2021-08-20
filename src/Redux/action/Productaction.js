export const setProducts=(Products)=>{
  return{
  type:'SET_PRODUCTS', 
   payload:Products
  };



};

export const setProduct=(Product)=>{
  return{
  type:'SET_SELECTED_PRODUCT', 
   payload:Product
  };



};
export const remoeSelected=(Product)=>{
  return{
  type:'REMOVE_SELECTED_PRODUCT', 
   payload:Product
  };



};