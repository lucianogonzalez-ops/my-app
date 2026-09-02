import { useRef, useState } from 'react';


export default function Counter() {
  const ref = useRef(0);
  const [mostrar, setMostrar] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    localStorage.setItem("puntero", String(ref.current));
  }

  function mostrarContador() {
    setMostrar(ref.current);
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me!
      </button>
      <button onClick={mostrarContador}>
        Mostrar Contador
      </button>
      <p>{mostrar}</p>
    </>
  );
}