import { create } from 'zustand'

interface FormState {
    name: string
    password: string
    setName: (name: string) => void
    setPassword: (password: string) => void
}

export const useFormState = create<FormState>((set) => ({
    name: "",
    password: "",
    setName: (name) => set({ name }),
    setPassword: (password) => set({ password })
}))

export function usarFormulario(){
    const setearNombre= useFormState((state)=state.setName)

}