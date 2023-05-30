'use strict';

//Query Selector
const saveBtn = document.querySelector('.js_saveBtn');

const nameInput = document.querySelector('.js_nameInput');
const promoInput = document.querySelector('.js_promoInput');
const cityInput = document.querySelector('.js_cityInput');

const indexSelect = document.querySelector('.js_indexSelect');




const adalabers = [
    // {
    //     name: '',
    //     promo: '',
    //     city: ''
    // }
]


// FUNCIONES



// EVENTOS

saveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    //1. Traer los valores que hay en los input
    const name = nameInput.value;
    const promo = promoInput.value;
    const city = cityInput.value;

    // const index = indexSelect.value;
    // Esto sería un texto, todo lo que viene de HTML viene com STRING

    const index = parseInt(indexSelect.value);
    
    console.log(name, promo, city, index);

    //2. Guarda los valores en el array

    adalabers [index-1] = {
        name: name, 
        promo: promo,
        city: city
    };
    // otra opción en vez de usar el index sería el usar el .PUSH:
    // adalabers.push ({
    //     name: name, 
    //     promo: promo,
    //     city: city
    // });


    //3. Ver el resultado
    console.log(adalabers);
})