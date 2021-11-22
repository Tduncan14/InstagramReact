import React from 'react';
import {Link} from 'react-router-dom';



const Signup = () => {




    return (
        <div className="mycard ">
        <div class="card  auth-card">
            <h2 > <span className="heading1">Instagram </span></h2>
            <input type="text" placeholder="email"/>


            
            <input type="text" placeholder="name"/>
  

            <input type="password" placeholder="password"/>


  
  
            <button className="btn waves-effect waves-light light-blue lighten-2">
                Login
            </button>

            <h5>
              <Link to="/signup"> Already have an account ?</Link>
          </h5>
  
        </div>
        </div>
    )


}


export default Signup