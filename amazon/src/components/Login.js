import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import './Login.css';
function Login() {
    const navigate = useNavigate ();

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            navigate('/');
        }).catch(error => alert(error.message));
        

    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
        }).catch(error => alert(error.message));
        if(auth){
            navigate('/');
        }
    }

  return (
    <div className='login'>
        <Link to ='/'>
            <img className= 'login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange = {e=> setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange = {e=> setPassword(e.target.value)}/>
                <button type='submit' className='login_signInbutton' onClick={signIn}>Sign In</button>

            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login_registerbutton' onClick={register}>Create your account</button>
        </div>
      
    </div>
  )
}

export default Login
