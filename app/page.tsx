'use client'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import CuentaRegresiva from './clase7/CuentaRegresiva'; 
import Contador from './clase7/ContadorClicks'; 
import { BotonCambiarTema } from './clase7/TemeCallContext'; 
import { ThemeWithProvider } from './clase7/ThemeWithProvider'; 
import { BotonIncrementarZustand } from './clase8/ContadorZustand'; 
import { HandleForm } from './clase8/UsoDeForm'; 
import Counter from './clase8/UseRefTest';
import ListaTareas from './clase8/UseMemo';
import { UsoDeMemo } from './clase8/UseOfUseMemo';



const navStyles = {
  display: 'flex',
  gap: '20px',
  backgroundColor: '#2c3e50',
  padding: '15px 25px',
  borderRadius: '8px',
  marginBottom: '25px',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif'
};

const linkStyles = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '14px',
  transition: 'color 0.2s'
};

function Home() { 
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Bienvenido a la Home</h1>
    </div>
  );
} 

function App() { 
  return ( 
    <BrowserRouter> 
      {/* Navegación Estilizada */} 
      <nav style={navStyles}> 
        <Link to="/" style={linkStyles}>Home</Link>
        <Link to="/cuenta-regresiva" style={linkStyles}>EJERCICIO 1</Link>
        <Link to="/Tema" style={linkStyles}>EJERCICIO 2</Link>
        <Link to="/Contador" style={linkStyles}>EJERCICIO 3</Link>
        <Link to="/Form" style={linkStyles}>EJERCICIO 4</Link> 
        <Link to="/Counter" style={linkStyles}>EJERCICIO 6</Link> 
        <Link to="/UseMemo" style={linkStyles}>EJERCICIO 7</Link> 



      </nav> 
      
      {/* Rutas */} 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/cuenta-regresiva" element={<CuentaRegresiva segundos={10} />} /> 
        <Route path="/Tema" element={<ThemeWithProvider />} /> 
        <Route path="/Contador" element={<BotonIncrementarZustand />} /> 
        <Route path="/Form" element={<HandleForm />} /> 
        <Route path="/Counter" element={<Counter />} /> 
        <Route path="/UseMemo" element={<UsoDeMemo/>} /> 



      </Routes> 
    </BrowserRouter> 
  ); 
} 

export default App;
