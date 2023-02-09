import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
const [userEmail , setUserEmail] = useState('')
const [userPassword , setUserPassword] = useState('')
const navigate = useNavigate();

const handleForm = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/users/signin',{
        email:userEmail,
        password:userPassword,
        })
    .then((response) =>{
        console.log(response)
        navigate('/dashboard')
    })
    .catch((error) =>{
        console.log(error)
    })

}
  return (
    <>
        <div className="signup_form">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <figure><img src="./images/singup-page-img.jpg" alt="" /></figure>
                    </div>
                    <div className="col-md-5">
                        <div className="form_box">
                            <h3>Sign In</h3>
                            <form onSubmit={handleForm}>
                                <label htmlFor="email">User Email</label>
                                <input type="text" id='email' placeholder='Email' onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
                                <label htmlFor="password">User Password</label>
                                <input type="text" id='password' placeholder='Password' onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
                                <button type='submit'>Sign In</button>
                                <Link to={'signup'}>Don't have an account? <strong>Sign Up</strong></Link>
                            </form>
                        
                        {/* {userEmail}<br />
                        {userPassword} */}
                        </div>
                    </div>    
                </div>      
            </div>          
        </div>
    </>
  )
}

export default Login