'use sctrict';

const listElem = document.querySelector('.js_list');
const inputName = document.querySelector('.js_name');
const btn = document.querySelector('.js_btn');

const data = [
    'Aida', 
    'Andrea', 
    'María',
    'Rita', 
    'Juanita'
];

//Deberíamos hace un bucle
//listElem.innerHTML += `<li>${data[0]}</li>`;
//listElem.innerHTML += `<li>${data[1]}</li>`;


for ( const eachName of data ) {
    listElem.innerHTML += `<li>${eachName}</li>`
};



const handleClick = (e) => {
    e.preventDefault();

    const nameToAdd = inputName.value;

    data.push (nameToAdd );

    listElem.innerHTML += `<li>${nameToAdd}</li>`;
};


btn.addEventListener('click',handleClick);

