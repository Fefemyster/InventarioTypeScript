export type tipoCategoria = "Electrónica"| "Alimentos" |"Textil"; 

export interface Producto
{
    id: number,
    nombre: string,
    precio: number ,
    categoria: tipoCategoria,
    stock: number,
    proveedor ?: string
};

export type estadoInventario = "Disponible"| "Bajo Stock" |"Agotado"; 

export interface reporteProducto extends Producto
{
 estado: estadoInventario;
}

export function clasificarInventario 
(
    producto: Producto
): reporteProducto {
    
    let estado: estadoInventario;

    if (producto.stock === 0) {
    estado = "Agotado";
  } else if (producto.stock <= 5) {
    estado = "Bajo Stock";
  } else {
    estado = "Disponible";
  }

  return{...producto, estado};
  
}

const prod1: Producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
  stock: 10,
  categoria: "Electrónica"
};

const reporte = clasificarInventario(prod1);

console.log(reporte);