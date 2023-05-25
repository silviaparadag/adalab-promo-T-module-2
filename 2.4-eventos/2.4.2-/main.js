'use strict';

const section = document.querySelector('.js__section');
const imgCat1 = document.querySelector('js__cat1');

imgCat1.addEventListener('click', (event) => {
    imgCat1.classList.add('selected');
});