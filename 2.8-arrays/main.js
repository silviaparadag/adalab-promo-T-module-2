'use strict';

// OPCIÓN 1:
/*
const producto1 = {
    nombreProducto: 'Camiseta',
    cantidad: 3 ,
    descuento: 20,
    importe: 15 ,
}

const producto2 = {
    nombreProducto: 'Leggins',
    cantidad: 5 ,
    descuento: 0,
    importe: 9,
}

const producto3 = {
    nombreProducto: 'Bandolera',
    cantidad: 1,
    descuento: 10,
    importe: 15,
}

const cestaCompra = [producto1, producto2, producto3];

console.log (cestaCompra);

*/

// OPCIÓN 2

const cestaCompra = [
//[0]
    {
    nombreProducto: 'Camiseta',
    cantidad: 3 ,
    descuento: 20,
    importe: 15 ,
    }, 
//[1]
    {
    nombreProducto: 'Leggins',
    cantidad: 5 ,
    descuento: 0,
    importe: 9,
    },
//[2]
    {
    nombreProducto: 'Bandolera',
    cantidad: 1,
    descuento: 10,
    importe: 15,
    }
];

console.log (cestaCompra);

const calcularImporteTotal = (objProducto) => {
    //console.log(objProducto);

    const prizeSinDto = objProducto.cantidad * objProducto.importe;
    const prizeConDto = prizeSinDto * (1- objProducto.descuento/100);

    return prizeConDto;
}

console.log('Voy a ejecutar la función con el producto 1');

const importe1 = calcularImporteTotal ( cestaCompra [0]);

console.log(importe1);



console.log('Voy a ejecutar la función con el producto 2');

const importe2 = calcularImporteTotal ( cestaCompra [1]);

console.log(importe2);