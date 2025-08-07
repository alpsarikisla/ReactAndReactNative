import React,{useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
   const[categories, setCategories] = useState([]);

  useEffect(()=>{
     axios.get("https://localhost:44332/api/Category")
        .then(res => setCategories(res.data))
        .catch(err=> console.log(err))
  });
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
