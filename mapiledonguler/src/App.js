import React,{useEffect, useState} from 'react'
import ListItem from './components/listitem'
import './App.css';
import axios from 'axios'

function App() {
  const products =[
    {id:1, name:"Ürün 1", description:"Lorem ipsum dolor sit amet", price:159.78},
    {id:2, name:"Ürün 2", description:"Lorem ipsum dolor sit amet", price:169.78},
    {id:3, name:"Ürün 3", description:"Lorem ipsum dolor sit amet", price:179.78},
    {id:4, name:"Ürün 4", description:"Lorem ipsum dolor sit amet", price:189.78},
    {id:5, name:"Ürün 5", description:"Lorem ipsum dolor sit amet", price:199.78}
  ]

  const[veriler, setData] = useState([]);

  const imageurl = "https://placehold.co/600x400"
  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
  });
  return (
    <>
      <div className="App">
        <h2>Bizim Veriler</h2>
          {products.map((data,i)=> (
          <p>selam</p>
        ))}
      
      </div>
      <div className='App'>
        <h2>Json Placeholder Veriler</h2>
          {veriler.map((data,i)=> (
          <ListItem baslik={data.title} resimyol={imageurl} / >
        ))}
      </div>
    </>
  );
}

export default App;

