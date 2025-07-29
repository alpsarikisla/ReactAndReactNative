import React,{useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const[data, setData] = useState("");
  const[id, setId] = useState(0);

  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setData(res.data[id].title))
        .catch(err=> console.log(err))
  },[data,id]);

  return (
    <div className="App">
      <p>{data}</p>
      <input type='text' value={id} onChange={e=> setId(e.target.value)}></input>
    </div>
  );
}

export default App;
