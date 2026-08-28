interface TarjetaProducto{
  nombre : string;
  prioridad : "alta" | "media" | "baja"
}


function MostrarTarea({nombre ,prioridad} : TarjetaProducto){
    return  <h1> nombre de tarea : {nombre}. importancia {prioridad}</h1>
}



export default function tareas(){
    <>
    <MostrarTarea nombre="jugar a la pelota" prioridad="alta" />
    <MostrarTarea nombre="comer" prioridad="media" />
    <MostrarTarea nombre="dormir" prioridad="baja" />
    
    
    </>
}
