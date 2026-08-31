import { create } from 'zustand'

interface ContadorState {
    contador: number
    incrementar: () => void
}

export const useContadorStore = create<ContadorState>((set) => ({
    contador: 0,
    incrementar: () => set((state) => ({ contador: state.contador + 1 })),

}))

export function BotonIncrementarZustand() {
    const incrementar =useContadorStore((state)=>state.incrementar)
    const contador = useContadorStore((state) => state.contador)

    return (
    <>
     <button onClick={incrementar}>Sumar 1</button>
     <p>{contador}</p>
    </>
    )

}