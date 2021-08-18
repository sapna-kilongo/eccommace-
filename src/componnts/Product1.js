import React from 'react'
import "./Produc1.css"
// import wirles from "../images/wirles.jpg"
import { AddShoppingCart , Visibility} from '@material-ui/icons';
function Product1({id,image,price,title}) {
    return (
        <div className="product_card">
            <img src={image} alt=""/>
            <p>{title}</p>
            <div className="title" >
                <div>
                   
                </div>
                
                <p>${price}</p>
                <span className="add_cart" >  <AddShoppingCart  />  </span>
                <span className="add_view" >  <Visibility />  </span>
               
            </div>    
        </div>
    )
}

export default Product1
