import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchUser} from '../redux/Redux'
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory()
    const state=useSelector((state)=>state)
    const {user}=state.user
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchUser())
    },[])
    console.log(user)
    const [loguser,setloguser] = useState({
        "Email" : "",
        "password" : ""
    })
    let name, value
    const handleChange=(e)=>{
        name=e.target.name
        value=e.target.value
        setloguser({
            ...loguser,
            [name] : value
        })
    }
    console.log(loguser)
    const handleclick=()=>{
        var flag="false"
        user.map(item=>{
            if(item?.email===loguser.Email){ 
               flag="true"
               if(item?.email===loguser.Email && item?.password===loguser.password){
                    if(item?.role=="student"){
                        alert(`${item?.name} successfully login as a student`)
                        history.push(`/student/${item?.name}`)
                    }
                    else if(item?.role=="faculty"){
                        alert(`${item?.name} successfully login as a teacher`)
                        history.push(`/teacher/${item?.name}`)
                    }
               }
               else{
                alert(`For ${item?.email} password is not valid`)
               }
            }
            
            
            console.log(item?.email)
            console.log(item?.password)
            console.log("empty")
            console.log(loguser.Email)
            console.log(loguser.password)
        })
        if(flag=="false"){
            
                alert("Email is not valid")     
        }
    }
    return (
        <div className="container">
            <h1>Login Here</h1>
            <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" name="Email" value={loguser.Email} onChange={handleChange}/>
                  
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={loguser.password} onChange={handleChange}/>
                </div>
                
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handleclick()}>Submit</button>
                
                <div class="mb-3 form-check">
                   <label class="form-check-label" for="exampleCheck1">Haven,t any account???</label>
                   <Link to="/reg">click here</Link>
                </div>
            </form>
        </div>
    )
}
