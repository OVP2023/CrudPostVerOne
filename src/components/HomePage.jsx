import { useEffect, useState } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    //выгрузка записей с сервера 
    const [data, setData] = useState();
    const [info, setInfo] = useState({id:'0',content:''});

    useEffect(() => {
        var url="http://localhost:7070/posts"
        axios.get(url)
          .then(function (response) {
            console.log(response.data)
            return response.data 
          })
          .then(data => setData(data))
          .catch(function (error) {
            console.log(error);
          })
      
        }, []) 
        
      function handleClick(e) {
          e.preventDefault();
          setInfo({id:e.currentTarget.id,content:e.currentTarget.value})
          localStorage.id=e.currentTarget.id
          localStorage.content=e.currentTarget.value
        }
      
    
      return (
          <> 
           <label> </label>
           <div className="list-group" style={{ width: '18rem' }}>    
              {data?.map((elem)=>
                <button id={elem.id}  value={elem.content} onClick={handleClick} key={elem.id} className="list-group-item list-group-item-action">
                  id={elem.id}, "{elem.content}"
                </button>                
              )}       
            </div> 
          </>
        )
  }


export default HomePage;