'use strict'



console.log('se ejecutó');

const nameInput = document.querySelector('.js__name');

const lastNameInput = document.querySelector('.js__lastname');

const resultParagraph = document.querySelector('.js__result');

const greetingMsg = `hola ${nameInput.value} ${lastNameInput.value}!`;

console.log(nameInput.value);
console.log(lastNameInput.value);
// Los input no tienen innerHTML!!!!
// para añadir class usamos classList, pero en console.log(nameInput.type)puedo pedir el type, el src, el placeholder, etc.

console.log('hola ' + nameInput.value + ' ' + lastNameInput.value + '!');

console.log(`hola ${nameInput.value} ${lastNameInput.value} !`);



resultParagraph.innerHTML = greetingMsg;
