import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

export default function Adddetails(props) {
    const {token}=props
    const history = useHistory()
    console.log(typeof(token), token)
    const [user,setUser]=useState({
        "name":"",
        "email":"",
        "password":""
        
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
   
    if(token=="student"){
        axios.post("http://localhost:4000/student", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
        }).then(res=>{
            alert(`${user.name} Successfully register as a ${token}`)
            console.log("ok")
            history.push("/student")

        })
    }
    else if(token=="teacher"){
        axios.post("http://localhost:4000/teacher", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
        }).then(res=>{
            alert(`${user.name} Successfully register as a ${token}`)
            console.log("ok")
            history.push("/teacher")
            
        })
    }
    

}



    return (
        <div className="container">
            <form className="RegisterPage">

                <h1 className="RegisterHead">Register as {token}</h1>


                <div className="form-group">
                    <label className="RegisterLabel">{token} Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={user.name} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">{token} Email</label>
                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={user.email} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">{token} Password</label>
                    <input type="password" className="form-control" placeholder="Enter your Password." name="password" value={user.password} onChange={handleInput}/>
                </div>

                


                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handlepost()}>Add {token}</button>

                
            </form>
        </div>
    )
}
