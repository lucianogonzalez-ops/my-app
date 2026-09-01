import { createContext, useContext, useState, type ReactNode } from 'react'
import {TemaProvider,useTema } from './TemaContext';



export function BotonCambiarTema() {
    const { tema ,cambiarTema } = useTema()
    return (
        <>
            <button
            onClick={cambiarTema}
            className={`w-full min-h-screen ${tema ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
            Cambiar Tema
            </button>
        </>
    )
}


