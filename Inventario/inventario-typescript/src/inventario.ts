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