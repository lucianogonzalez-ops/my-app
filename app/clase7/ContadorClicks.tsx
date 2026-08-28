'use client'; 

import { useState } from 'react'; 
import { useEffect } from 'react'; 


function Contador() {
    const [cantidad, setCantidad] = useState(0);
    useEffect(()=>{
        document.title = `Tu numero de clicks es ${cantidad}`

    },[cantidad])

    const botonStyle = {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    
    cursor: 'pointer'
    }

    return (
    <button style={botonStyle} onClick={() => setCantidad(cantidad + 1)}>
        Clickear
    </button>
    );
}


export default Contador