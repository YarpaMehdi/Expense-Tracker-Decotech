import axios from 'axios'
import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SignUp = () => {
const [userName , setUserName] = useState('')
const [userEmail , setUserEmail] = useState('')
const [userPassword , setUserPassword] = useState('')

const navigate = useNavigate();

const handleForm = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/users/signup',{
        username:userName,
        password:userPassword,
        email:userEmail
    })
    .then((response) =>{
        console.log(response)
        navigate('/')
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
                        <h3>Sign Up</h3>
                        <form onSubmit={handleForm}>
                            <label htmlFor="username">User Name</label>
                            <input type="text" id='username'  placeholder='Name' onChange={(e)=> setUserName(e.target.value)} value={userName}/>
                            <label htmlFor="email">User Email</label>
                            <input type="text" id='email' placeholder='Email' onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
                            <label htmlFor="password">User Password</label>
                            <input type="text" id='password' placeholder='Password' onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
                            <button type='submit'>Sign Up</button>
                            <Link to={'signin'}>Already have an account? <strong>Sign In</strong></Link>
                        </form>
                        {/* {userName}<br />
                        {userEmail}<br />
                        {userPassword} */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default SignUp