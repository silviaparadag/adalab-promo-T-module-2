'use strict';

// un solo igual = solo asigna, 


// const inputName = document.querySelector('.js__inputName');

// const greetingBox = document.querySelector('.js__greeting');

// //Obtener el nombre que ha escrito la usuaria

// const userName = inputName.value;

// if (userName === 'Paquita') {
//     //SI
//     // Escribir en el párrafo "Hola, Paquita"
//     greetingBox.innerHTML = 'Hola, Paquita';
// }
// else {
//     greetingBox.innerHTML = '';
// }


// if (userName === 'Paquita' || userName === 'Irene') {
//     //SI
//     // Escribir en el párrafo "Hola, nombre" y usar acento francés ``y $
//     greetingBox.innerHTML = `Hola, ${userName}`;
// }
// else {
//     greetingBox.innerHTML = '';
// }


const messageElement = document.querySelector('.js__message');


const estaOculto = messageElement.classList.contains('hidden');

if (estaOculto) {
    console.log('el mensaje de error está oculto.');
}
else {
    console.log('el mensaje de error está visible');
}