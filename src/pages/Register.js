import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import './Login.css'

function Register() {
    return (
        <div className="container" >
            <div className="register">
                <form>
                    <div className='center'>
                    <Avatar className='center' />
                    </div>
                    <div className="emailfield"  >
                        <input type='email' placeholder='enter your email' />
                    </div>
                    <div className="emailfield"  >
                        <input type='text' placeholder='enter your full name' />
                    </div>
                    <div className="emailfield"  >
                        <input type='text' placeholder='enter your phone number' />
                    </div>
                    <div className="emailfield"  >
                        <input type='password' placeholder='enter password' />
                    </div>
                    <div className="emailfield"  >
                        <input type='password' placeholder='retpe password' />
                    </div>

                    <Button className='buton'>Register</Button>              

                </form>


        </div>
        </div>
        )
}

export default Register
