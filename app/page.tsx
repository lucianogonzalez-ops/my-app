'use client'; 

import { useState } from 'react'; 

import Contador from './clase7/ContadorClicks';
import CountDown from './clase7/CuentaRegresiva';
import { BotonDecrementar, BotonIncrementar, ContadorProvider, PantallaContador } from './clase7/CounterContext';
import {  TemaProvider } from './clase7/TemaContext';
import { BotonCambiarTema } from './clase7/TemeCallContext';
import { BotonIncrementarZustand } from './clase8/ContadorZustand';



function App() {
  return (
    <>
      <h1>LESSON 6</h1>
      <Contador />
      <h1>Exercise2</h1>
      <CountDown segundos={10}></CountDown>
      <h1>Exercise3</h1>
      <ContadorProvider>
        <PantallaContador/>
        <BotonIncrementar/>
        <BotonDecrementar/>
      </ContadorProvider>
      <TemaProvider>
        <BotonCambiarTema></BotonCambiarTema>
      </TemaProvider>
      <BotonIncrementarZustand/>

      
    </>
  );
}

export default App;
