import React, {useEffect,useState,useContext} from 'react';
import { Usercontext } from '../../App';


const Profile  = () => {

    const {state,dispatch} = useContext(Usercontext);

    const [pic,setPic] = useState([])
    const [users,setusers] = useState(JSON.parse(localStorage.getItem('user')))




    console.log(state,'this state for profile')


    useEffect(()=>{

        fetch(' http://localhost:8000/api/mypost',{
           

        method:"GET",

        headers:{
            "Authorization":"Bearer " + localStorage.getItem('jwt')
        }
        })
        .then(data => data.json())
        .then(res => setPic(res.mypost))
        .catch(err => console.log(err))

       


    },[])

    console.log(users)



    return (
      <div style={{margin:"auto"}}>
          <div style={{display:'flex', justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid grey"}} >
              <div>
                  <img  style={{width:"160px",height:"160px",borderRadius:"50%"}}
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
              </div>
              <div>
                  <h4>{  users.name ? users.name : "loading"} </h4>
                  <div style={{display:"flex",justifyContent:"space-between", width:"108%"}}>

                      <h6> 40 posts</h6>
                      <h6> 40 followers</h6>
                      <h6> 40 following</h6>
                  </div>
              </div>
         
         
         
       
          </div>
          <div className="gallery">

    {
        pic.map((p)=> {


            return( 

                <img key={pic._id} src={p.photo} alt={p.title}/>

            )





        })
    }




</div>
      </div>
    )




}

export default Profile