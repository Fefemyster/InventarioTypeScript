console.log('Hello World');


import {
    type Producto,
    type reporteProducto,
    clasificarInventario,
    agregarStock,
    totalizarPorCategoria
} from './inventario.ts'

const arregloProductos: Producto [] =[
    { id: 1,
    nombre: 'Laptop',
    precio: 2000 ,
    categoria: 'Electrónica',
    stock: 20,
    proveedor: 'Dell'},

    { id: 2,
    nombre: 'Telefono',
    precio: 2000 ,
    categoria: 'Electrónica',
    stock: 10,
    proveedor: 'Samsung'},

    { id: 3,
    nombre: 'Camisa Polo',
    precio: 2000 ,
    categoria: 'Textil',
    stock: 5,
    proveedor: 'Pacer'},

    { id: 4,
    nombre: 'Pollo Entero',
    precio: 2000 ,
    categoria: 'Alimentos',
    stock: 15,
    proveedor: 'Pollo Rey'},
]   

console.log(arregloProductos);


const productoSeleccionado = arregloProductos[3]; //Indice del producto a mostrar, en este caso, Pollo en alimentos
const sorteoInventario : reporteProducto = clasificarInventario(productoSeleccionado);

console.log(sorteoInventario);


const cantidadActualizada = arregloProductos[0];
const stockActualizado : Producto = agregarStock(cantidadActualizada, 4);


console.log(stockActualizado); //Stock base de 20, se sumaron 4, stock nuevo de 24

const total : number = totalizarPorCategoria(arregloProductos,"Alimentos" );

console.log(`El costo total de Alimentos es ${total}`);