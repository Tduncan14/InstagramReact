import React, { useContext, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Usercontext} from '../App'

const Navbar = () => {



   const {state,dispatch} = useContext(Usercontext);
   const[user,setuser] = useState(localStorage.getItem('user'))

   const navigate = useNavigate()

   const renderList = () => {

    console.log(user,'this is the user')
    
  

 


    console.log(state,'this is the state')
      if(state || user){
       return [
         <>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/create">Create</Link></li>
          <button className="btn waves-effect waves-light blue darken"

          onClick={()=>{
            localStorage.clear();
            dispatch({type:'CLEAR'})
            navigate('/signin')
          }}
          
          >

             LOGOUT

          </button>
          </>
        ]
      }


      else{

        return [
          <>
             <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ]

      }




   }

    return(
        <nav>
        <div className="nav-wrapper white" >
          <a href="/" className="brand-logo left">Instagram</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            {renderList()}
            {/* <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">Create</Link></li> */}
          </ul>
        </div>
      </nav>
    )




}








export default Navbar