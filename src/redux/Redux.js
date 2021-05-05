import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import axios from 'axios'
import { composeWithDevTools } from "redux-devtools-extension"
//reducer for users
const initialState={
    user: []
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "show" : return{user: action.payload}
        default: return state
    }
}

//reducers for student
const initialstudentState={
    student: []
}
const studentReducer=(state=initialstudentState,action)=>{
    switch(action.type){
        case "showstudent" : return{student: action.payload}
        default: return state
    }
}


//reducer for teacher
const initialteacherState={
    teacher: []
}
const teacherReducer=(state=initialteacherState,action)=>{
    switch(action.type){
        case "showteacher" : return{teacher: action.payload}
        default: return state
    }
}


//combine reducers
const combinereducer= combineReducers({
    user : authReducer,
    student : studentReducer,
    teacher : teacherReducer
})

//store
export const store = createStore(combinereducer,composeWithDevTools(applyMiddleware(thunk)));

export const getUser=(user)=>{
    return{
        type : "show",
        payload : user
    }
}
export const fetchUser=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/users").then(res=>{
            dispatch(getUser(res.data))
            console.log(res.data)
        })
    }
}

export const getStudent=(user)=>{
    return{
        type : "showstudent",
        payload : user
    }
}
export const fetchStudent=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/students").then(res=>{
            dispatch(getStudent(res.data))
            console.log(res.data)
        })
    }
}

export const getTeacher=(user)=>{
    return{
        type : "showteacher",
        payload : user
    }
}
export const fetchTeacher=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/teachers").then(res=>{
            dispatch(getTeacher(res.data))
            console.log(res.data)
        })
    }
}
