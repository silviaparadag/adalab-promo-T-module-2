'use strict';


const inputEmail = documentquerySelector('.js__inputEmail');

const inputPass = documentquerySelector('.js__inputPassword');

const messageBox = document.querySelector('.js__message');

const userEmail = inputEmail.value;


if ( userEmail.includes('@') && userEmail.includes('.')) {
    //Es un email correcto
console.log ('Email correcto');
    //Comprobar que el email y la contraseña están autorizados
}
else {
    messageBox.innerHTML = "Ese email no parece correcto"
}
