import React from 'react'
import "./Produc1.css"
// import wirles from "../images/wirles.jpg"
import { setCart } from '../Redux/action/AddToCart'
import { AddShoppingCart , Visibility} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { connect} from 'react-redux'




function Product1({product,setCart}) {
    const {id,title,image,price}=product


    return (
        <div className="product_card">
            <img src={image} alt=""/>
            <p>{title}</p>
            <div className="title" >
                <div>
                   
                </div>
                
                <p>${price}</p>
                <span className="add_cart" >  <AddShoppingCart onClick={()=>setCart(product)} />  </span>
                <span className="add_view" > <Link  to={`/${id}`} > <Visibility /> </Link> </span>
               
            </div>    
        </div>
    )
}

const mapdisptch=disptach=>({

    setCart:product=>disptach(setCart(product))
})

export default connect(null,mapdisptch)(Product1)
