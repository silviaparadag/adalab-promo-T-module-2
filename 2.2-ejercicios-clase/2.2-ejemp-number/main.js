'use strict'


const inputScore1 = document.querySelector('.js__score1');
const inputScore2 = document.querySelector('.js__score2');
const inputScore3 = document.querySelector('.js__score3');

const resultParagraph = document.querySelector('.js__result');

let sum = 0;

// Coger la nota 1
console.log(typeof inputScore1.value);


// Usamos parseInt para que lo convierta en número entero, si no pondríamos parseFloat

sum = parseInt(inputScore1.value);

// Coger la nota 2

sum = sum + parseInt(inputScore2.value);

// Coger la nota 3

sum = sum + parseInt(inputScore3.value);

// Calcular la nota media

const mean = sum/3;

// Poner la media del párrafo

resultParagraph.innerHTML = `nota media: ${mean}`;










/* 
const resultado = 1 + 2 * 5;

console.log(resultado);
//preferencia de multiplicación/división
*/


/* let numeroA = 2;
let numeroB = 5;

let resultado = numeroA + numeroB;
*/


