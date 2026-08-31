import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FormState {
    localName: string;
    localPassword: string;
    setCredentials: (name: string, password: string) => void;
    logOut: () => void;
}

export const useFormState = create<FormState>()(
    persist(
    (set) => ({
    localName: '',
    localPassword: '',
    logOut: () => set(() => ({ localName: "" , localPassword: ""})),
    setCredentials: (name, password) => 
        set({ 
        localName: name, 
        localPassword: password 
        }),
    }),
    {
    name: 'DATOS_STORAGE', 
    }
    )
);
