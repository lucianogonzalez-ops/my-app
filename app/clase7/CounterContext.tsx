import { createContext, useContext, useState, type ReactNode } from 'react'

interface ContadorContextType {
    contador: number
    incrementar: () => void
    decrementar: ()=> void
}

export const ContadorContext = createContext<ContadorContextType | undefined>(undefined)

export function ContadorProvider({ children }: { children: ReactNode }) {
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador((c) => c + 1)
    const decrementar = () => setContador((c) => c - 1)


    return (
    <ContadorContext.Provider value={{ contador, incrementar , decrementar}}>
    {children}
    </ContadorContext.Provider>
    )
}

export function BotonIncrementar() {
    const { incrementar } = useContador() 
    return <button onClick={incrementar}>Sumar 1</button>
}

export function BotonDecrementar() {
    const { decrementar } = useContador() 
    return <button onClick={decrementar}>Sumar 1</button>
}

export function PantallaContador() {
    const { contador } = useContador() 
    return <h2>El valor actual es: {contador}</h2>
}


export function useContador() {
    const contexto = useContext(ContadorContext)
    if (!contexto) {
    throw new Error('useContador debe usarse dentro de un ContadorContext.Provider')
    }
    return contexto
}




