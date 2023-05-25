'use strict';

//ESTRUCTURA GLOBAL
// const btn = document.querySelector('.js__btn');

// btn.addEventListener('', (event) => {
//     //Bloque de código
// })


const sumBtn = document.querySelector('.js__sumBtn');

sumBtn.addEventListener('click', (event) => {
    event.preventDefault();
    //Prevenir que se recargue al hacer código.
    console.log(event.target); 
    //esto es interesante 

    //otra cosa interesante es el debugger
    debugger;
    console.log("holis");



    //Traer el input num1
    const inputNum1 = document.querySelector('.js__inputNum1');

    // Sacar el value input num1, ojo que hay poner el parseInt(num), pq por defecto del HTML lo trae como STRING 
    const num1 = parseInt(inputNum1.value);


    // Traer el input num2
    const inputNum2 = document.querySelector('.js__inputNum2');

    // Sacar el value input num2
    const num2 = parseInt(inputNum2.value);

    // Sumar los dos values 

    const sum = num1 + num2;

    // Traaer el input resultado
    const resultBtn = document.querySelector('.js__resultBtn');

    // Escribir la suma en ese input
    resultBtn.value = sum;
    // no se puede meter con resultBtn.innerHTML = sum; pq el input no tiene contenido.


    } );




