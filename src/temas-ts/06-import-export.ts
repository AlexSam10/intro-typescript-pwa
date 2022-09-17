//-----------------------
//Exportar e Importar funciones
import { calcularIva2, Producto } from "./05-desestructura-function";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:1234
    },
    {
        desc:'Tablet2',
        precio:12332
    },
    {
        desc:'Telefono2',
        precio:17332
    },   
  ];
  const [total1,iva1]=calcularIva2(tiendaProductos);
  console.log(`Total: ${total1} \n IVA: ${iva1}`);
