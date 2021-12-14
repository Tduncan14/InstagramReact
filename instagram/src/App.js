import React,{createContext,useContext,useEffect,useReducer} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route,Routes,useNavigate} from 'react-router-dom';
import Signin from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Profile from './components/Screens/Profile';
import Home from './components/Screens/Home';
import Create from './components/Screens/Createpost';
import {reducer,intialState} from './reducers/userReducer'



export const Usercontext = createContext()





const Routing = () =>{

  const history = useNavigate()
  const{state,dispatch} = useContext(Usercontext)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
  
    if(user){
      history('/')
    }

    else{
      history('/signin')
    }
  
  },[])


  return(
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/> 
         
      <Route path="/signin" element={<Signin/>}/> 
   
      <Route path="/profile" element={<Profile/>}/>

      <Route path="/create" element={<Create/>}/>
    
 
 </Routes>
    
    
    </>
  )
}


function App() {

  const [state,dispatch] = useReducer(reducer,intialState);


  return (
    <Usercontext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar />

      <Routing />

  {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/> 
         
      <Route path="/signin" element={<Signin/>}/> 
   
      <Route path="/profile" element={<Profile/>}/>

      <Route path="/create" element={<Create/>}/>
    
 
 </Routes> */}

    </Router>
    </Usercontext.Provider>
  );
}

export default App;
