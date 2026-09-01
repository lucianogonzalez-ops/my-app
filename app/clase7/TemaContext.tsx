import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

function useLocalStorage(clave: string, valorInicial: boolean) {
    const [valor, setValor] = useState(() => {
        const guardado = localStorage.getItem(clave)
        return guardado ? JSON.parse(guardado) : valorInicial
    })

    useEffect(() => {
        localStorage.setItem(clave, JSON.stringify(valor))
    }, [clave, valor])

    return [valor, setValor] as const
}

interface TemaContextType {
    tema: boolean
    cambiarTema: () => void
}

export const TemaContext = createContext<TemaContextType | undefined>(undefined)

export function TemaProvider({ children }: { children: ReactNode }) {
    const [tema, setTema] = useLocalStorage('tema', false)
    function cambiarTema() {
        setTema((actual: boolean) => !actual)
    }

    return (
        <TemaContext.Provider value={{ tema, cambiarTema }}>
            {children}
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