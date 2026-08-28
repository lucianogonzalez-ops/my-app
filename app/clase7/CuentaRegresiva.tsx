import { useState } from 'react'; 
import { useEffect } from 'react'; 


interface SegundosIniciales{
    segundos : number
}

function CountDown({segundos}:SegundosIniciales){
    const [contador, setSegundos] = useState(segundos);
    const guardado = localStorage.getItem("segundos");
    
    useEffect(()=>{
        if(guardado && Number(guardado) != 0)[
            setSegundos(Number(guardado))
        ]

    },[])
    
    const styleContador={
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#2563eb',
                lineHeight: 1.2,
                marginBottom: '4px',
            }
    
    
    useEffect(()=>{
        if (contador <= 0 )return
        const intervalo = 
        
    
        setInterval(() => {
        
            setSegundos((prev) => prev - 1);
            }, 1000);
                
            return () => clearInterval(intervalo);

        },[contador])

    useEffect(()=>{
                localStorage.setItem("segundos",JSON.stringify(contador))
    }
        ,[contador])
    
    
    
        return(
        <>
        <div style={styleContador}>
        Tiempo restante: {contador} segundos
        </div>;
        <button onClick={() => setSegundos(segundos)}>Resetear Contador</button>
        
        </>
        


    )
    

        
        


}
export default CountDown
