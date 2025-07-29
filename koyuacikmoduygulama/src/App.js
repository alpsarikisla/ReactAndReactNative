import React, { useState } from 'react';
import './App.css';
import Container from './components/container';

const tema={
  dark:{
    color:"white",
    backgroundColor:"black"
  },
  light:{
    color:"black",
    backgroundColor:"white"
  }
}
export const TemaData = React.createContext();

function App() {

  const [data, setData] = useState(tema.dark);
  function temadegistir()
  {
    if(tema.dark === data)
    {
      setData(tema.light)
    }
    else
    {
      setData(tema.dark)
    }
  };
  return (
    <div className="App">
      <button onClick={temadegistir}>{tema.dark === data? "Açık Tema":"Koyu Tema"}</button>
      <TemaData.Provider value={data}>
        <Container></Container>
      </TemaData.Provider>
      
    </div>
  );
}

export default App;
