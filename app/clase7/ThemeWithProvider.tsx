import {TemaProvider,useTema } from './TemaContext';
import { BotonCambiarTema } from './TemeCallContext';





export function ThemeWithProvider(){
    return(
        <>
        <TemaProvider>
                <BotonCambiarTema></BotonCambiarTema>
        </TemaProvider>
        </>
    )
}