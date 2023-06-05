'use strict';

/* PLANTEAMIENTO INICIAL:
    1.- HTML: 
a) Div -> color
b) h1 -> cara, 
c) select para elegir cara
d) Butón para el update

    2.-CSS
a) Crear las clases de CSS con los colores CSS: amarillo y naranja
b) Estilos generales de la web

    3.- JS:
a) Crear contantes de JS:
        i. <h1> cara
        ii. sección del div
        iii. botón
        iv. select cara
        
b) Escuchar eventos:
        i.  Evento tipo 'click' sobre Update
        ii. Crear la función del evento click:
            - obtener el valor de la cara seleccionada (ev.currentTarget)
            - con innerHTML cambión el contenido del <h1>.

        ******

        iii. Generar el número ALEATORIO y guardarlo en una variable

        iv.  Validar si el número es PAR o IMPAR. (numero %'resto' 2) -> con un concional
        v.   Añadir/quitar la clase con classList que corresponda.


    5.-

*/

// NOMBRAR LAS CONSTANTES (3.a)

const main = document.querySelector('.js-main');
const face = document.querySelector('.js-face');
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');



// NOMBRAR LAS FUNCIONES 

function changeFace() {
    const valueFace = select.value;
    face.innerHTML = valueFace;
}

/* La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), por eso lo multiplicamos por 100
     Las dos opciones son válidas para el redondeo:
    */

function getRandomNumber (max){
    const randomNumber = parseInt(Math.random()*max);
    return randomNumber;
}

function changeColour() {
    //console.log('color');
    // const randomNumber = parseInt(Math.random()*100);
    const randomNumber = getRandomNumber(100);
    console.log(randomNumber);
    if (randomNumber%2 === 0) {
        main.classList.add('yellow');
        main.classList.remove('orange');
    }
    else {
        main.classList.remove('yellow');
        main.classList.add('orange');
    };
};

function handleClickBtn(ev) {
    //ev.preventDefault();
    //console.log('he hecho click');
    changeFace();
    changeColour();
};



// NOMBRAR LOS EVENTOS

btn.addEventListener('click', handleClickBtn);