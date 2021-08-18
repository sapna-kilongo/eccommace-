import React from 'react'
import "./Header.css"
import { IconButton,Avatar,Badge} from '@material-ui/core'
import { ShoppingCart, LaptopMacOutlined} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';



function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }


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
               <IconButton><Link  to="/cart"><Badge badgeContent={4} color="secondary"><ShoppingCart/>
                        </Badge></Link></IconButton>
               <IconButton>  <Link to='/account/login' ><Avatar  width='50' height='50'/></Link>  </IconButton>
            </div>
            
               
           </div>


       

        </div>
    )
}

export default Header
