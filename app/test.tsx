'use client'; 

import { useState } from 'react'; 

type Prioridad = 'alta' | 'media' | 'baja';

interface TarjetaProducto { 
  nombre: string; 
  prioridad: Prioridad; 
} 

interface ListaTareas { 
  titulo: string; 
  children: React.ReactNode; 
} 

interface PropsHeader { 
  children: React.ReactNode; 
} 

interface PropsFooter { 
  children: React.ReactNode; 
} 

function TarjetaTarea({ texto }: { texto: string }) { 
  const [completada, setCompletada] = useState(false); 
  return ( 
    <div onClick={() => setCompletada(!completada)}> 
      <span style={{ textDecoration: completada ? 'line-through' : 'none' }}> 
        {texto} 
      </span> 
    </div> 
  ); 
} 

function Header({ children }: PropsHeader) { 
  return ( 
    <div className="Header"> 
      <div className="tarjeta-cuerpo">{children}</div> 
    </div> 
  ); 
} 

function Footer({ children }: PropsFooter) { 
  return (
    <div className="Footer"> 
      <div className="tarjeta-cuerpo">{children}</div> 
    </div> 
  ); 
} 

function MostrarListaTareas({ titulo, children }: ListaTareas) { 
  return ( 
    <div className="tarjeta-contenedor">
      {titulo} 
      <div className="tarjeta-cuerpo">{children}</div> 
    </div> 
  ); 
} 

function MostrarTarea({ nombre, prioridad }: TarjetaProducto) { 
  return <h1>nombre de tarea: {nombre}. importancia: {prioridad}</h1>; 
} 

function Tareas() { 
  return ( 
    <> 
      <MostrarTarea nombre="jugar a la pelota" prioridad="alta" /> 
      <MostrarTarea nombre="comer" prioridad="media" /> 
      <MostrarTarea nombre="dormir" prioridad="baja" /> 
    </> 
  ); 
} 

export default function App() { 
  return ( 
    <> 
      <Header>Mi Header</Header> 
      <MostrarListaTareas titulo="locura"> 
        <Tareas /> 
      </MostrarListaTareas> 
      <Footer>Mi footer</Footer> 
    </> 
  ); 
}
