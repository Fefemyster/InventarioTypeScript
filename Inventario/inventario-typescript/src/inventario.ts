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