'use strict';



// const num1 = 5;
// const num2 = 2;

// console.log( num1 + num2);

// const sum = num1 + num2;

// console.log( sum );

// const subtract = num1 - num2; 

// const multiply = num1 * num2;
// console.log( multiply );
// const divide = num1 / num2;
// console.log( divide );
// const remainder = num1 % num2;
// console.log( remainder );
// Remainder es el resto de una división, lo que sobra: en 25/4 es 1: (6*4)+1.

const condT = 5 +5 === 10;
// Condición que es True
console.log(condT);

if (condT) {
    console.log('mi mac sabe sumar')
}
// como por defecto, (condT) es Truthy, verdader, ya nos dice da el resutlrao

const condF = 10/3 === 3;
// Condición que es False
console.log(condF);

if (condF) {
    console.log('Mi mac NO saba hacer divisiones')
}
else {
    console.log('mi ordenador SÍ sabe dividir');
}


// como por defecto, (condF) es False, ya nos dice FALSE

const condCompuestaAnd = (5+5 === 10) && (10-2 === 8) ;
console.log(condCompuestaAnd);

// con los && tiene que cumplirse todas las condiciones del conjunto.

const condCompuestaOr = (5+5 === 10) || ('A' === 'B') ;
console.log(condCompuestaOr);