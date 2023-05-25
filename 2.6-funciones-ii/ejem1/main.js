'use sctrict';

function calcularIva ( importe ) {
    //debemos recibir un número
    console.log(importe);
    //multiplicar x 1.21
    const precioConIva = importe * 1.21;
    //devuelve ese número
    return precioConIva;
}

// Opción más simplificada
// function calcularIva ( importe ) {
//     return importe * 1.21;
// }

// Otra opción:
// const variCalcularIva = function ( importe ){
//     return import * 1.21;
// }


// Otra opción con arrow
const calcularIva = (importe) => {
    return importe * 1.21;
};

// y además si solo tiene un parámetro, se puede simplificar todavía más.
const calcularIva = importe => importe * 1.21;


debugger;

const precioConIva1 = calcularIva (29.99);

const precioConIva2 = calcularIva (100);

const precioConIva3 = calcularIva (13);

console.log(precioConIva1, precioConIva2, precioConIva3);
