'use strict';

const divElements = document.querySelector('.js-div');

/* EJERCICIO 2.1.3-3 
Habría varias opciones:

OPC 1: */


// divElements.innerHTML = `<h1>Lorem ipsum</h1>`;
// divElements.innerHTML += `<img src="https://placekitten.com/g/200/300"/>`;
// divElements.innerHTML += `<p>Lorem ipsum dolor sit amet</p>`;



// OPC 2:
// divElements.innerHTML = `<h1>Lorem ipsum</h1>`+ `
//     <img src="https://placekitten.com/g/200/300"/>` + 
//     `<p>Lorem ipsum dolor sit amet</p>`
// ;



//OPC 3:
divElements.innerHTML = `
    <h1>Lorem ipsum</h1>
    <img src="https://placekitten.com/g/200/300"/>
    <p>Lorem ipsum dolor sit amet</p>
`;