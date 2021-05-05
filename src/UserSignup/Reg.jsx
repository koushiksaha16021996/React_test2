
import React, { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

export default function Reg() {
    const history = useHistory()
    const [user,setUser]=useState({
        "name":"",
        "email":"",
        "password":"",
        "role": ""
        
    })
    const param=new URLSearchParams();
    let name, value
const handleInput=(e)=>{
        
        name=e.target.name
        value = e.target.value
        setUser({
            ...user,
            [name]:value
        })
    }

const handlepost=()=>{
    //e.preventDefault();
   param.append("name", user.name);
   param.append("email", user.email);
   param.append("password", user.password);
   param.append("role", user.role);
   
    axios.post("http://localhost:4000/user", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        alert("Registration Successful")
        console.log("ok")
        history.push("/login")
        
    })
    

}
    return (
        <div className="container">
            <form className="RegisterPage">

                <h1 className="RegisterHead">Register</h1>


                <div className="form-group">
                    <label className="RegisterLabel">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={user.name} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={user.email} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your Password." name="password" value={user.password} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Role</label>
                    <input type="text" className="form-control" placeholder="Enter yourself as a student or teacher" name="role" value={user.role} onChange={handleInput}/>
                </div>
                
                                                                                
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handlepost()}>Sign Up</button>
                
                <div class="mb-3 form-check">
                   <label class="form-check-label" for="exampleCheck1">For signin</label>
                   <Link to="/login">click here</Link>
                </div>
            </form>            
        </div>
    )
}
