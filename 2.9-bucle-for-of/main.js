'use strict';


// BUCLES CON ARRAYS

// 


//OPCIÓN 1: 
// const listEl = document.querySelector('.js-list');
// const subjectList = ['HTML', 'CSS', 'JS', 'React'];

// for (let i = 0; i < subjectList.length; i++) {
//     listEl.innerHTML += `<li>${subjectList[i]}</li>`;
// };


/* lo de arriba sería equivalente a esto
listEl.innerHTML = `<li>${subjectList[0]}</li>`;
listEl.innerHTML += `<li>${subjectList[1]}</li>`;
listEl.innerHTML += `<li>${subjectList[2]}</li>`;
listEl.innerHTML += `<li>${subjectList[3]}</li>`;
*/


/*OPCIÓN 2: Bucle FOR .. OF

Todos los bucles FOR..OF se pueden hacer con un FOR clásico, pero no al revés!

for ( const nombreDeVariable of nombreDeLaVariableDelArray ) {
}
*/

// const listEl = document.querySelector('.js-list');
// const subjectList = ['HTML', 'CSS', 'JS', 'React'];


// for ( const valorApintar of subjectList ) {
//     listEl.innerHTML += `<li>${valorApintar}</li>`;
// }

/*OPCIÓN 3: Bucle con OBJETOS


*/


const listEl = document.querySelector('.js-list');
const subjectList = [
    { name: 'HTML', score: 2}, 
    { name: 'CSS', score: 5}, 
    { name: 'JS', score: 7}, 
    { name: 'React', score: 8}
];

let sum = 0;
//esta necesitamos que sea variable

for ( const oneSubject of subjectList ) {

    sum += oneSubject.score;
    //sum = sum + oneSubject.score;
    
    listEl.innerHTML += `<li> <h3> ${oneSubject.name} </h3> tiene una puntuación ${oneSubject.score}</li>`;
}
console.log((sum/subjectList.length).toFixed(2));