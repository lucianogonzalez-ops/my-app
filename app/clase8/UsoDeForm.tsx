import { useFormState } from "./FormularioZustand";
import { useState } from "react";

export function HandleForm() {
    const { setCredentials ,logOut} = useFormState();

    const [localName, setLocalName] = useState("");
    const [localPassword, setLocalPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        setCredentials(localName, localPassword);

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                placeholder="UsuarioNombre"
            />
            <input
                type="password"
                value={localPassword}
                onChange={(e) => setLocalPassword(e.target.value)}
                placeholder="Contraseña"
            />
            <button onClick={logOut}>Cerrar sesion</button>
            <button type="submit">Enviar</button>
        </form>
    );
}
