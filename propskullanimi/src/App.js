import React,{ useState } from 'react';
import './App.css';
import Container from './components/container'
import EbuBekirSiddik from './components/ebusindik';

function App() {
  const [baslik, setBaslik]= useState("Nedir Bu Props?");
  const altaciklama = "C# 'ın metot propertylerine benzer bir kullanımdır";
  return (
    <div className="App">
      <EbuBekirSiddik></EbuBekirSiddik>
      <Container deneme={baslik} aciklama={altaciklama}></Container>
      <button onClick={()=> {setBaslik("Button aracılığı ile değiştirildim")}}>Prop içeriği değiştir</button>
    </div>
  );
}


export default App;
