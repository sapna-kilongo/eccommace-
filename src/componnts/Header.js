import React from 'react'
import "./Header.css"
import { IconButton,Avatar,Badge} from '@material-ui/core'
import { ShoppingCart, LaptopMacOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import Cartcoponent from './Cartcoponent'
import {setToggle} from '../Redux/action/AddToCart'
import { useSelector,useDispatch} from 'react-redux'




function Header() {

    const hidden=useSelector((state)=>state.cart.hidden)
    const dispatch =useDispatch()
 
   

    return (
        <div className="Header" >
            <div className="left_header">
             
              <IconButton><Link  to="/"> <LaptopMacOutlined/></Link></IconButton>
              <h5>Eccommace</h5>
           </div>
           
              
             
           <div className="right_header">
               <div className="Search">
               <input type="search" placeholder="search product here"/>
               </div>
               
            <div>
               <IconButton onClick={()=>{dispatch(setToggle())}}><Badge badgeContent={4} color="secondary"><ShoppingCart  />
                        </Badge></IconButton>
               <IconButton>  <Link to='/account/login' ><Avatar  width='50' height='50'/></Link>  </IconButton>
            </div>
            
            
           </div>
           { hidden ? null:<Cartcoponent/> }

           
          

       

        </div>
    )
}

export default Header
