import "./App.css";
import "./components/Nabvar/Navbar.css";
import Navbar from "./components/Nabvar/Navbar";
import Generi from "./components/Generi/Generi";
import Card from "./components/Card/Card";
import GeneroImg from "./components/Generi/GeneroImg";
import BtnDarkMode from "./components/BtnDarkM/BtnDarkMode";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa"
import { useState } from "react";
function App() {
  const generi = [
    {
      id: 1,
      genero: "Rock",
      descripcion:
        "El rock es un género musical que surgió en los años 50, caracterizado por el uso de guitarras eléctricas y ritmos fuertes.",
      image:
        "https://peninsulamen.com/wp-content/uploads/2020/07/Mujeres-que-impulsan-el-desarrollo-del-rock-en-M%C3%A9xico.jpg",
    },
    {
      id: 2,
      genero: "Pop",
      descripcion:
        "El pop es un género musical que se caracteriza por melodías pegajosas y letras sencillas, dirigido a un público masivo.",
      image: "https://expocompositores.com/cdn/shop/articles/unnamed_7_6f257b74-010b-41ae-98ba-06fbaa0df96d.jpg?v=1717946881", // Reemplaza con una URL de imagen real
    },
    {
      id: 3,
      genero: "Hip Hop",
      descripcion:
        "El hip hop es un género musical que incluye rap, beats y samples, originado en la cultura urbana de los años 70.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27aA-8dgcU7Ffms0Wvz9bFSAgiXka-KJ9b8MO0OKN3CUSPXh26Gr5wAheAI45grh7C18&usqp=CAU", // Reemplaza con una URL de imagen real
    },
    {
      id: 4,
      genero: "Electrónica",
      descripcion:
        "La música electrónica se caracteriza por el uso de sintetizadores y beats electrónicos, popular en festivales y clubes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfN8tL5Txd9zx4LHcsi3rMi9uOns11029BVCYzhgt3txu5N1rzua4BVkeKYcFkT6oj5Q&usqp=CAU", // Reemplaza con una URL de imagen real
    },
    {
      id: 5,
      genero: "Jazz",
      descripcion:
        "El jazz es un género musical que se originó en Nueva Orleans, conocido por su improvisación y ritmos complejos.",
      image: "https://previews.123rf.com/images/incomible/incomible1803/incomible180300034/96846315-festival-de-m%C3%BAsica-de-jazz-de-fondo-con-instrumentos-musicales.jpg", // Reemplaza con una URL de imagen real
    },
    {
      id: 6,
      genero: "Reggaetón",
      descripcion:
        "El reggaetón es un género musical que combina reggae, hip hop y ritmos latinos, popular en América Latina y el mundo.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQmWtsy3s6Ksa6jH3uxsrnW2x5BtF3rK7Jdc497JsZp4_6O3HItdGdDGHu1glGij8TeE&usqp=CAU", // Reemplaza con una URL de imagen real
    },
    {
      id: 7,
      genero: "Clásica",
      descripcion:
        "La música clásica se refiere a obras compuestas por grandes maestros como Mozart, Beethoven y Bach, con estructuras complejas.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqFDWOBoBE63drNpyBF3JPeowtSooBIfBLn8jVZqY7029qo_hxrsxBIQ7QUfg1DO6irU&usqp=CAU", // Reemplaza con una URL de imagen real
    },
    {
      id: 8,
      genero: "Salsa",
      descripcion:
        "La salsa es un género musical que combina ritmos afrocaribeños, popular en América Latina y el Caribe.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHj58DGm1XVWWDxWP8Bm-UdFhSGbifM5yStVbenjQCVnvxCGpitEReq5yeaKrzD5Ljtjc&usqp=CAU", // Reemplaza con una URL de imagen real
    },
    {
      id: 9,
      genero: "Country",
      descripcion:
        "El country es un género musical originario de Estados Unidos, caracterizado por guitarras acústicas y letras narrativas.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrXGW_vuqRw9rVv0aw06nmuBwZrITs0y01cikB_-SPULvf7AR2F5mjW9WYG-VLHa_hIo&usqp=CAUg", // Reemplaza con una URL de imagen real
    },
    {
      id: 10,
      genero: "Reggae",
      descripcion:
        "El reggae es un género musical originario de Jamaica, conocido por su ritmo relajado y mensajes de paz y amor.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5AItmZ58YSBpZOUxUAH-TY1MKTD69ETLhaG3OtyPyXc4uSShljx4IikFNqy2XKIFgDk&usqp=CAU", // Reemplaza con una URL de imagen real
    },
  ];

  const [isDarkMode,setDarkMode]= useState(false);
  

  return (
    <>
    <div children={isDarkMode ? 'dark-mode': 'light-mode'}>
      <BtnDarkMode isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>



      <Navbar  />

   
      {/* <button  onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ?  <MdSunny style={{width: '20px', height:'20px'}}/> : <FaMoon style={{width: '20px', height:'20px',}}/>}
      </button> */}
    
    <div className="card-container">
      {generi.map((genero) => (
        <Card key={genero.id}>
          <Generi genero={genero} description={genero.descripcion}/>
          <GeneroImg image={genero.image} />
        </Card>
      ))}
      </div>



      </div>
    </>
  );
}

export default App;
