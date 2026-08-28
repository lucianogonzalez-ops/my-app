'use client'; 

import { useState } from 'react'; 
import Contador from './clase7/ContadorClicks';
import CountDown from './clase7/CuentaRegresiva';

function App() {
  return (
    <>
      <h1>LESSON 6</h1>
      <Contador />
      <h1>Exercise2</h1>
      <CountDown segundos={10}></CountDown>
    </>
  );
}

export default App;
