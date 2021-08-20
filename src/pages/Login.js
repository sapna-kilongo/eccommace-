import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import './Login.css'
import google from '../images/download.png'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <form>
                <div className='center'>
                <Avatar className='center' />
                </div>
                <div className="emailfield"  >
                    <input type='email' placeholder='enter your email' />
                </div>
                <div className="emailfield"  >
                    <input type='password' placeholder='enter password' />
                </div>

                <Button className='buton'>login</Button>
                  <div className="others" >
                     <img className='google'src={google} alt="google"/>
                     <p>or <Link to='/account/register'>register</Link>  <Link to='/account/forgot' > forgot password </Link>   </p>
                    
                 
                  </div>
            </form>

         
        </div>
   
    )
}


