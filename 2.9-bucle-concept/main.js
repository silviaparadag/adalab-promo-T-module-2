'use strict';


// BUCLES|LOOPS

// ejecutar las intrucciones que damos "n" veces.
/*
let num = 1;
console.log(num);

    a) Esto es lo mismo que b)
num = num +1;
console.log(num);

    b) 
num = ++;
console.log(num);

A la variable normalmente se le llama "i", pero podría ser como queramos:

for ( let num = 1; i <= 10; num++) {
    console.log(num);
}
*/



// for ( let i = 1; i <= 10; i++) {
//     console.log(i);
// }

const listEl = document.querySelector('.js-list');

for ( let i = 1; i <= 10; i++) {
    listEl.innerHTML += `<li>${i}</li>`;
    // listEl.innerHTML = listEl.innerHTML + `<li>${i}</li>`
}

const calcForm = document.querySelector('.js-classForm');
for (let i = 0; i < 10; i++) {
    calcForm.innerHTML += `<input type="button" value="${i}">`;
};