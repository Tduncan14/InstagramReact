
import React,{useState,useEffect} from 'react';
import{Link,useNavigate} from 'react-router-dom'
import M from"materialize-css";


const CreatePost = () => {


    const [title,setTitle] = useState("");
    const[body,setBody] = useState("");
    const[image,setImage]= useState("");
    const[auth,setAuth] = useState("");
    const[url,setUrl] = useState("")

    const Navigate = useNavigate()


    useEffect(()=>{
        if(url){
            fetch("http://localhost:8000/api/createPost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
                })
            }).then(res=>res.json())
            .then(data=>{
        
               if(data.error){
                  M.toast({html: data.error,classes:"#c62828 red darken-3"})
               }
               else{
                   M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
                   Navigate('/profile')
               }
            }).catch(err=>{
                console.log(err)
            })
        }

    }
    ,[url])

    const postDetails = () => {

        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','insta-clone')
        data.append('cloud_name','treek')


        fetch('https://api.cloudinary.com/v1_1/treek/image/upload',{

          method:"post",
          body:data


        })
        .then(res => res.json())
        .then(data =>{
            
            setUrl(data.url)
            console.log(url)
        })
        .catch(err => console.log(err))

         
      




    }

    // useEffect(( ) => {


    //     if(!auth){
    //         setAuth(localStorage.getItem('auth'));
            
    //     }

    //     console.log(auth);

    // },[])



     const handleSubmit = (e) => {

        e.preventDefault();

        let token = localStorage.getItem('auth')

        const newPost = new FormData();


        newPost.append('title',title);
        newPost.append('body',body);
        image && newPost.append('photo',image)


        console.log([...newPost,"postgit"])
        console.log(image,title,body)
        
 
        fetch('http://localhost:8000/api/createPost',{
            method:'post',
            headers:{'Authorization': `Bearer ${token}`},
            body:newPost
        })
        .then((res) => res.json())
        .then(data =>{

            console.log(data)
        })
        .catch(err => console.log(err))


     }


    //  const handleImageChange = (e) => {

    //     console.log(e.target.files[0]);
 
    //     setImage(e.target.files[0]);


     
     

     


    return(
        <div className="card input-filed" style={{margin:"150px auto",maxWidth:"1000px",padding:"50px", textAlign:"center"}}>

            <input type="text" placeholder="title"
            onChange={(e)=> setTitle(e.target.value)} value={title}/>

            <input type="text" placeholder="body" onChange={e => setBody(e.target.value) }value={body}/>

            <div className="file-field input-field">
                <div className="btn">
                     <span> Upload image</span>
                     <input type="file" onChange={(e)=> setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>

            <button onClick={postDetails}className="btn waves-effect waves-light #64b5f6 blue darken-1">Post</button>

        </div>
    )



}


export default CreatePost