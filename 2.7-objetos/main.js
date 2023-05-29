'use sctrict';

const producto1 = {
    nombreProducto: 'Camiseta' ,
    cantidad: 1 , //qty
    descuento: 20,
    importe: 15 , //amount
}

const producto2 = {
    nombreProducto: 'Leggins' ,
    cantidad: 3 , //qty
    descuento: 20,
    importe: 15 , //amount
}

const producto3 = {
    nombreProducto: 'Bandolera' ,
    cantidad: 2 , //qty
    descuento: 10,
    importe: 15 , //amount
}

const calcularImporteTotal = (objProducto) => {
    console.log(objProducto);

    const prizeSinDto = objProducto.cantidad * objProducto.importe;
    const prizeConDto = prizeSinDto * (1- objProducto.descuento/100);

    return prizeConDto;
}

// const importe1 = calcularImporteTotal (producto1.cantidad, producto1.descuento, producto1.importe); 
// const importe2 = calcularImporteTotal (producto2.cantidad, producto2.descuento, producto2.importe); 

// console.log(importe1,importe2);

const importe1 = calcularImporteTotal ( producto1 ); 
const importe2 = calcularImporteTotal ( producto2 ); 
const importe3 = calcularImporteTotal ( producto3 ); 

console.log(importe1,importe2, importe3);


// OTRO ejemplo

/*
const obj = {
    titulo: 'Los guardianes',
}

obj.director = 'James';
obj['guionista'] = 'Charles'
obj['year'] = 2023;

const propiedad = 'género';
const valor = 'Aventuras';

obj[propiedad] = valor;

console.log(obj); 
*/