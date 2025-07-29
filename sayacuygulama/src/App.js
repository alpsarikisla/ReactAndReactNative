import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[count, setCount]= useState(0);
  const[timer, setTimer] = useState(30);

  useEffect(()=>{
   
    if(timer !== 0)
    {
      const interval=setInterval(() => {
      setTimer(timer - 1);
      }, 1000);
      document.title= timer;
      return()=> clearInterval(interval);
    }
   document.title = "Gerisayım Tamamlandı";
  });

  return (
    <>
      <div className="App">
        <div style={{height:"250px", width:"250px", backgroundColor:"purple", borderRadius:"50%", color:"white", fontSize:"60px",margin:"10px auto", lineHeight:"250px"}}>{timer}</div>
      </div>
      <div className="App">
        <p>{count}</p>
        <button onClick={()=> setCount(count + 1)}>Arttır</button>
      </div>
    </>
   
  );
}

export default App;
