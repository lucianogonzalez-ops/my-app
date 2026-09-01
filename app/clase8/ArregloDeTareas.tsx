import React, { useState, useMemo } from 'react';

export default function ListaTareas({ tareas }) {
  const [busqueda, setBusqueda] = useState('');

  const filtradas = useMemo(() => {
    return tareas.filter(t => t.texto?.toLowerCase().includes(busqueda.toLowerCase()));
  }, [tareas, busqueda]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} 
      />

      <ul>
        {filtradas.map(tarea => (
          <li key={tarea.id}>
            {tarea.texto}
          </li>
        ))}
      </ul>

      {filtradas.length === 0 && <p>No se encontraron tareas.</p>}
    </div>
  );
}
