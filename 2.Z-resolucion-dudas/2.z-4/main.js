'use strict';

// VARIABLES

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

const span = document.querySelector('.msg');

// FUNCIONES

function handlerClick () {
    list.innerHTML = `<li> ${inception}</li>`;
    list.innerHTML += `<li> ${theButterFlyEffect}</li>`;
    list.innerHTML += `<li> ${eternalSunshineOfTheSM}</li>`;
}

function handleClickList(event){
    console.log(event.target);
    span.innerHTML = `La peli seleccionada es ${event.target.textContent}`
}

// EVENTOS
btn.addEventListener('click', handlerClick);

list.addEventListener('click', handleClickList);

