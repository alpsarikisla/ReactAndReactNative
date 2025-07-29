import React,{useState} from 'react';
import './index.css';

function App() {
  //useState, renderlar arasında verimizi tutmazı sağlayan bir react Hookudur.(Kanca) 
  //Component Fonksiyonumuz her renderda temizlenip tekrar compute edilmektedir. 
  //Değişkenlerimiz ve verilerimiz tekrar compute edilince initial değerine ğeri döner.
  //Bu sorunu çözmek için verilerimizi usestate ile tutarız
  //useState bir fonksiyondur. Parametre olarak tutmak istediğimiz verini başlangıç değerini alır, veya başlangıç değerini oluşturan bir fonksiyon alabilir.
  const [count, setCount] = useState(7) ;
  function arttir(){
    //setCount(count + 1);
    //setCount(count + 1);
    setCount(eskideger => eskideger + 1)
    setCount(eskideger => eskideger + 1)
  }
  function azalt(){
    setCount(count - 1);
  }
  const isim = "Murtaza Şuayipoğlu";
  const etiket = <h3>Merhaba {isim}</h3>;
  const kisi = {
    isim : "Murtaza", soyisim:"Şuayipoğlu" 
  };
  const personel = {
    isim : "Alp", soyisim:"Sarıkışla" ,departman:"Muhasebe"
  };

  function KisiYazdir(parametre)
  {
    return parametre.isim + " " + parametre.soyisim + " " + parametre.departman;
  }


  return (
    <>
      <nav>
        <ul>
          <li>Anasayfa</li>
          <li>Anasayfa</li>
          <li>Anasayfa</li>
          <li>Anasayfa</li>
        </ul>
      </nav>
      <section className='imageBackground'></section>
      <div className='counter'>
        <button onClick={azalt}>-</button>
        <span>{count}</span>
        <button onClick={arttir}>+</button>
      </div>
      <div className='counter'>
        {etiket}
      </div>
      <div className='counter'>
        <h2> {KisiYazdir(kisi)}</h2>
      </div>
      <div className='counter'>
        <h2> {KisiYazdir(personel)}</h2>
      </div>
       <div className='counter'>
        <h2> {KisiYazdir(personel).toLocaleUpperCase()}</h2>
      </div>
      <div className='counter'>
        <h2 style={{color:"pink"}}> {KisiYazdir(personel).toLocaleUpperCase()}</h2>
      </div>
    </>
  );
}

export default App;
