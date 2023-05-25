'use strict';

//SECCIÓN QUERIES

const selectOper = document.querySelector('.js_selectOper');
//Traer el input num1
const inputNum1 = document.querySelector('.js__inputNum1');
// Traer el input num2
const inputNum2 = document.querySelector('.js__inputNum2');
// Traaer el input resultado
const resultBtn = document.querySelector('.js__resultBtn');

const sumBtn = document.querySelector('.js__sumBtn');

// SECCIÓN FUNCIONES

function sum() {
    // Sacar el value input num1, ojo que hay poner el parseInt(num), pq por defecto del HTML lo trae como STRING 
      const num1 = parseInt(inputNum1.value);

    // Sacar el value input num2
      const num2 = parseInt(inputNum2.value);

    // Sumar los dos values 
      const sum = num1 + num2;

    // Escribir la suma en ese input
      resultBtn.value = sum;
    // no se puede meter con resultBtn.innerHTML = sum; pq el input no tiene contenido.
}

function diff() {
    // Sacar el value input num1, ojo que hay poner el parseInt(num), pq por defecto del HTML lo trae como STRING 
      const num1 = parseInt(inputNum1.value);

    // Sacar el value input num2
      const num2 = parseInt(inputNum2.value);

    // Restar los dos values 
      const diff = num1 - num2;

    // Escribir la resta en ese input
      resultBtn.value = diff;
    // no se puede meter con resultBtn.innerHTML = sum; pq el input no tiene contenido.
}

function times() {
    // Sacar el value input num1, ojo que hay poner el parseInt(num), pq por defecto del HTML lo trae como STRING 
      const num1 = parseInt(inputNum1.value);

    // Sacar el value input num2
      const num2 = parseInt(inputNum2.value);

    // Multiplica los dos values 
      const times = num1 * num2;

    // Escribir la multiplicación en ese input
      resultBtn.value = times;
    // no se puede meter con resultBtn.innerHTML = sum; pq el input no tiene contenido.
}


// SECCIÓN EVENTOS

sumBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const operation = selectOper.value;

    if( operation === 'sum') {
        sum();
    }
    else if( operation === 'diff') {
        diff();
    }
    else if( operation === 'times') {
        times();
    }
    } );




