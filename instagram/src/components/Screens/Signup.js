import React,{useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import M from 'materialize-css';


const Signup = () => {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("")


    const history = useNavigate();
   

    useEffect(()=> {




    },[])


   const PostData = ()=> {

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        return}
    
    else{

    fetch("http://localhost:8000/api/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            password,
            email


        
        })
    }).then(res => res.json())
    .then(data =>{ if(data.error){
        M.toast({html:data.error,classes:"red darken-3"})}

        else{
            M.toast({html:data.message, classes:'green darken-2'})
            history('/signin')
        }
        

    }


    ).catch(err =>{
        console.log(err)
    })

   
}
   }

    return (
        <div className="mycard ">
        <div class="card  auth-card">
            <h2 > <span className="heading1">Instagram </span></h2>
                   
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
  


            
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