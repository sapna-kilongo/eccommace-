import React from 'react'
import pic from '../images/produc1.jpg'
import laptop from '../images/laptop.jpg'
import { Close} from '@material-ui/icons'
import {IconButton,Button} from '@material-ui/core'
import './Cart.css'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <div className="shoppingCart" >  
               <div className="top_header">
                   <h1>Shopping Cart</h1>
                   <div>
                       
                   </div>
               </div>
                <div className='cart'>
                       <IconButton><Close/></IconButton> 
                        <img src={pic} alt="pic"/>
                        <div className="product_1">
                            <h5>title</h5>  
                        </div>
                        <div className="product_1">
                            <input type="number"/>     
                        </div>
                        <p>$10</p>
                </div>
                <div className='cart'>
                       <IconButton><Close/></IconButton> 
                        <img src={laptop} alt="pic"/>
                        <div className="product_1">
                            <h5>title</h5>  
                        </div>
                        <div className="product_1">
                            <input type="number"/>     
                        </div>
                        <p>$10</p>
                </div>
                

                <div className="tatol">
                    <div>
                        
                    </div>
                    <div className='total'>
                        <div className='cost'
                        ><p>Total</p>
                        <p>$10</p>
                        </div>
                       
                    <Button ><Link to='/checkout'> proceed checkout </Link> </Button>
                      
                    </div>
                </div>
        </div>
    )
}

export default Cart
