import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>  
        <Navbar/>  
        <div className="col-1 signup">
          <form className='register-form' >
            <p>LogIn</p>
 
            <input onChange={(e) => (e.target.value)} 
                        type='text' placeholder='Enter your email'/>

            <input onChange={(e) => (e.target.value)} 
                        type='text' placeholder='Enter your password'/>

 
            <button type='submet'> Login</button> 
            <Link to="/Shop-Home"></Link>
            <div>
              <span>Already have an account ?</span>
            </div>           

          </form>
        </div>

    </div>
  )
}
export default Login;
 