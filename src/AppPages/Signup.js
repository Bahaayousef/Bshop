import React, {useState} from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth,db } from '../FirebaseConfigs/Firebase';
import {collection,addDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './login-signup.css';


 
const Signup = () => {   
  
  const [username, setusername] = useState(""); 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  
  const handleSubmit = async (e)=> {
    
    e.preventDefault()
     
     createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user;
        const initialcreatvalue = 0;
        console.log(user); 

        addDoc(collection(db,"Users"), {
          username:username,
          email:email,
          password:password,
          phonenumber:phonenumber,
          cart: initialcreatvalue,
          uid:user.uid,
        }).then(() => {
            setSuccessMsg('Signed up Successfuly')
            setusername('') 
            setemail('')
            setpassword('')
            setTimeout(()=> { 
              setSuccessMsg(''); 
              navigate('/Login');
            },4000);
        }) 
      
        .catch((error) => {setErrorMsg(error.massage)});
    })
  
  .catch((error) => {
      if(error.massage === 'Firebase:Error (auth/invalid-email).'){
        setErrorMsg('pleas fill all fields');
      }
 
      if(error.massage == 'firebase: Error (auth/email-alrady exist).'){
        setErrorMsg('user already exist');  
      }
    }
  )}

  return ( 
    <div>
        <Navbar/>  
        <div className="col-1 signup">
          <form className='register-form' onSubmit={handleSubmit}>
            <p>Creat Account</p>

           {successMsg &&<>
              <div className='suc-msg'>
                {successMsg} 
              </div>
            </>}

            {errorMsg &&<> 
              <div className='err-msg'>
                {errorMsg} 
              </div>
            </>}

 
            <label>Your Name</label> 
            <input onChange={(e) => setusername(e.target.value)} 
                        type='text' placeholder='Full Name'/>

            <input onChange={(e) => setemail(e.target.value)} 
                        type='text' placeholder='Enter your email'/>

            <input onChange={(e) => setpassword(e.target.value)} 
                        type='text' placeholder='Enter your password'/>

            <input onChange={(e) => setphonenumber(e.target.value)} 
                        type='text' placeholder='Enter your phone number'/>
 
            <button type='submet'> Signup</button> 
            <Link to="/Login"></Link>
            <div>
              <span>Already have an account ?</span>
              <Link to="/Login" style={{color:'white'}}> SignIn</Link>
            </div>           

          </form>
        </div>

    </div>
  ) 
}

export default Signup;
 