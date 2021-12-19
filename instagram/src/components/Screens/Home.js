import React,{useState,useEffect} from 'react';



const Home = () => {

     const [data,setData] = useState([])


     useEffect(()=> {

        fetch('http://localhost:8000/api/getposts',{
            headers:{
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log('results',result)
          
            setData(result.posts)
        })


        


     },[])


     console.log(data,'this is the data post ')

    return (
        <div className="home">
            {
                data.map(item => {

                    return(
                        <div className="card  home-card" key={item.postedBy._id}>
                  <h5>{item.postedBy.name}</h5>
                  <div className="card-image">
                      <img src={item.photo}/>
                  </div>

                  <div className="card-content">
                  <i className="material-icons"  style={{color:"red"}}>favorite</i>
                      <h6>{item.title}</h6>
                      <p>{item.body}</p>
                      <input type="text" placeholder="add comment"/>
                  </div>
            </div>
            



                    )})
            }
            <div className="card  home-card">
                  <h5> Treek</h5>
                  <div className="card-image">
                      <img src="https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                  </div>

                  <div className="card-content">
                  <i className="material-icons"  style={{color:"red"}}>favorite</i>
                      <h6>title</h6>
                      <p>This is a good post</p>
                      <input type="text" placeholder="add comment"/>
                  </div>
            </div>
            

         

        </div>
    )
}

export default Home