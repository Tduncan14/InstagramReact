
import React,{useState} from 'react';

const CreatePost = () => {


    const [title,setTitle] = useState("");
    const[body,setBody] = useState("");
    const[image,setImage]= useState("");


     const handleSubmit = (e) => {

        e.preventDefault();

        const newPost = new FormData();


        newPost.append('title',title);
        newPost.append('body',body);
        image && newPost.append('image',image)


        console.log([...newPost,"postgit"])
        console.log(image,title,body)


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

            <button onClick={handleSubmit}className="btn waves-effect waves-light #64b5f6 blue darken-1">Post</button>

        </div>
    )



}


export default CreatePost