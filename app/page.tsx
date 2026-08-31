"use client"; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import CuentaRegresiva from "./clase7/CuentaRegresiva"; 
import Contador from "./clase7/ContadorClicks";
import { BotonCambiarTema } from "./clase7/TemeCallContext";
import { ThemeWithProvider } from "./clase7/ThemeWithProvider";
import { BotonIncrementarZustand } from "./clase8/ContadorZustand";
import { HandleForm } from "./clase8/UsoDeForm";

function Home() { 
} 

function App() { 
  return ( 
    <BrowserRouter> 
      {/* Navegación */} 
      <nav> 
        <Link to="/">Home</Link> | {" "}
        <Link to="/cuenta-regresiva">EJERCICIO 1</Link>        
        <Link to="/Tema">EJERCICIO 2</Link>
        <Link to="/Contador">EJERCICIO 3</Link>
        <Link to="/Form">EJERCICIO 4</Link>



      </nav> 

      {/* Rutas */} 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/cuenta-regresiva" element={<CuentaRegresiva segundos={10} />} /> 
        <Route path="/Tema" element={<ThemeWithProvider />} /> 
        <Route path="/Contador" element={<BotonIncrementarZustand />} /> 
        <Route path="/Form" element={<HandleForm />} /> 



      </Routes> 
    </BrowserRouter> 
  ); 
} 

export default App;
