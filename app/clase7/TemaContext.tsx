import { createContext, useContext, useState, type ReactNode } from 'react'

interface TemaContextType {
    tema: boolean
    cambiarTema: () => void
    
}

export const TemaContext = createContext<TemaContextType | undefined>(undefined)

export function TemaProvider({ children }: { children: ReactNode }) {
    const [tema, setTema] = useState(false)
 



    const cambiarTema = () => setTema((c) => !c) 

    return (
    <TemaContext.Provider value={{ tema, cambiarTema,  }}>        {children}
    </TemaContext.Provider>
    )
}



export function useTema() {
    const contexto = useContext(TemaContext)
    if (!contexto) {
    throw new Error('useTema debe usarse dentro de un TemaProvider')
    }
    return contexto
}
