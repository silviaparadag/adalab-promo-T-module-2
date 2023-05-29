'use strict';


const btn = document.querySelector('.js-button');


function handleClick (event) {
    event.preventDefault();
    if (btn.classList.contains('btn-danger')){
        btn.classList.remove('btn-danger')
        btn.innerHTML = "Hola Adalaber";
    } 
    else {
         btn.classList.add('btn-danger')
         btn.innerHTML = "Bye Adalaber";
    }
}

btn.addEventListener('click', handleClick)