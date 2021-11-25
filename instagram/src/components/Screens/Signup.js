import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';


const Signup = () => {

    const history = useHistory;
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState(" ")


   const PostData = ()=> {

    fetch("http://localhost:8000/api/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            password:password,
            email:email


        
        })
    }).then(res => res.json())
    .then(data =>{ if(data.error){
        M.toast({html:data.error,classes:"red darken-3"})}

        else{
            M.toast({html:data.message, classes:'green darken-2'})
            history.push('/signin')
        }
        

    }


    )

   
}

    return (
        <div className="mycard ">
        <div class="card  auth-card">
            <h2 > <span className="heading1">Instagram </span></h2>
            <input type="text" placeholder="email"  value={email} onChange={e => setEmail(e.target.value)}/>


            
            <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
  

            <input type="password" placeholder="password" value={password} onChange={e =>setPassword(e.target.value)}/>


  
  
            <button onClick={() => PostData()} className="btn waves-effect waves-light light-blue lighten-2">
                Signup
            </button>

            <h5>
              <Link to="/signin"> Already have an account ?</Link>
          </h5>
  
        </div>
        </div>
    )


}


export default Signup