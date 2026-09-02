import ListaTareas from './UseMemo';

const misTareas = [
  { id: 1, name:'Laptop Pro 16', category: 'Electrónica' },
  { id: 2, name:'Smartphone Galaxy X', category: 'Electrónica' },
  { id: 3, name:'Auriculares Cancelación Ruido', category: 'Electrónica' },
  { id: 4, name:'Teclado Mecánico RGB', category: 'Electrónica' },
  { id: 5, name:'Monitor Gamer 27 Pulgadas', category: 'Electrónica' },
  { id: 6, name:'Camiseta Deportiva Transpirable', category: 'Ropa y Calzado' },
  { id: 7, name:'Zapatillas de Running Nitro', category: 'Ropa y Calzado' },
  { id: 8, name:'Pantalón Jean Slim Fit', category: 'Ropa y Calzado' },
  { id: 9, name:'Chaqueta Impermeable', category: 'Ropa y Calzado' },
  { id: 10, name:'Sudadera con Capucha', category: 'Ropa y Calzado' },
  { id: 11, name:'Cafetera Express Automática', category: 'Hogar y Cocina' },
  { id: 12, name:'Set de Sartenes Antiadherentes', category: 'Hogar y Cocina' },
  { id: 13, name:'Aspiradora Robot Inteligente', category: 'Hogar y Cocina' },
  { id: 14, name:'Licuadora de Alta Potencia', category: 'Hogar y Cocina' },
  { id: 15, name:'Suplemento Proteína de Suero', category: 'Salud y Bienestar' },
  { id: 16, name:'Mat de Yoga Antideslizante', category: 'Salud y Bienestar' },
  { id: 17, name:'Vitaminas Multivitamínico Diario', category: 'Salud y Bienestar' },
  { id: 18, name:'Juego de Mesa Estrategia Total', category: 'Juguetes y Entretenimiento' },
  { id: 19, name:'Set de Bloques para Construcción', category: 'Juguetes y Entretenimiento' },
  { id: 20, name:'Consola de Videojuegos Retro', category: 'Juguetes y Entretenimiento' }
];

export function UsoDeMemo() {
  return <ListaTareas tasks={misTareas} />;
}
