import logo from './logo.svg';
import './App.css';

import Login from './UserLogin/Login';

import Reg from './UserSignup/Reg';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Studentdashboard from './student/Studentdashboard';
import Teacherdashboard from './teacher/Teacherdashboard';




function App() {
  
  return (
   <div className="App">
     <BrowserRouter>
     <Switch>
         <Route exact path="/" component={()=><Redirect to="/login"/>}/>
         
         <Route exact path="/login" component={()=><Login/>}/>
         
         <Route exact path="/reg" component={()=><Reg/>}/>

         <Route exact path="/student/:name" component={(props)=><Studentdashboard studname={props.match.params.name}/>}/>

         <Route exact path="/teacher/:name" component={(props)=><Teacherdashboard teachname={props.match.params.name}/>}/>

         
       </Switch>
    
     </BrowserRouter>
       
     
   </div>
   
  );
}

export default App;
