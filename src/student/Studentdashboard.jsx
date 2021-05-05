import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchStudent} from '../redux/Redux'

export default function Studentdashboard(props) {
    const {studname} =props
    
    const state=useSelector((state)=>state)
    const {student}=state.student
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchStudent())
    },[])
    console.log(student)
    
    return (
        <div className="container">
            <center><h1>{studname} welcome to student portal</h1></center>
            
        </div>
    )
}
