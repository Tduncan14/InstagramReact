import React,{useState} from 'react'
import{Link,useNavigate} from 'react-router-dom'
import M from"materialize-css";


const Login = () => {


    const navigate = useNavigate();


     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');




     const PostData = () => {


        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }


      fetch("http://localhost:8000/api/signin",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email,
              password
          })
        }).then(res => res.json())
        .then(data => {if(data.error){
            M.toast({html:data.error,classes:'red darken-3'})
        }
        else{
            console.log(data,'this is the data');

           localStorage.setItem('jwt',data.token)
           localStorage.setItem('user',JSON.stringify(data.user))
            M.toast({html:"signed successful",classes:"green darken-1"})
            navigate('/')
        } })
        .catch(err =>{
            console.log(err)
        })

     }


    return(
        
        <div className="mycard ">
      <div class="card  auth-card">
          <h2 > <span className="heading1">Instagram </span></h2>
          <input type="text" placeholder="email" name="email" onChange={(e)=> setEmail(e.target.value)}/>

          <input type="password" placeholder="password" name="password" onChange={(e)=> setPassword(e.target.value)}/>


          <button className="btn waves-effect waves-light light-blue lighten-2" onClick={()=> PostData()}>
              Login
          </button>

          <h5>
              <Link to="/signin">Don't have an account?</Link>
          </h5>

      </div>
      </div>
    )





}

export default Login