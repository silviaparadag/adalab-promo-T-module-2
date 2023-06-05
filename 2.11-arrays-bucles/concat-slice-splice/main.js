'use sctrict';

const listElem = document.querySelector('.js_list');
const inputName = document.querySelector('.js_name');
const btn = document.querySelector('.js_btn');

const indexSelect = document.querySelector('.js_index');

const data = [
    'Aida', 
    'Andrea', 
    'María',
    'Rita', 
    'Juanita'
];

const extraAdalabers = [
    'Carol',
    'Lola',
    'Pepa',
];

// CONCAT nos da otro array, y hay que después llamar a esa nueva variable en el bucle (for)

const newData = data.concat(extraAdalabers);

// REVERSE modifica el orden, hace el inverso
newData.reverse();

// SLICE
//newData.slice ( posicioInicioIncluida, posicionFinalExcl);
console.log ('Slice');
console.log (newData.slice( 1, 3));

//



for ( const eachName of newData ) {
    listElem.innerHTML += `<li>${eachName}</li>`
};



const handleClick = (e) => {
    e.preventDefault();

    const nameToAdd = inputName.value;

    data.push (nameToAdd );

    listElem.innerHTML += `<li>${nameToAdd}</li>`;
};


btn.addEventListener('click',handleClick);

// SPLICE

const handleChange = (e) => {
    console.log (`Cambia al ${indexSelect.value}`);

    const index = parseInt(indexSelect.value);

    newData.splice (index, 1, 'Borrado'); // Esta línea elimina el elemento del array

    console.log ('Como queda');
    console.log (newData);
};


indexSelect.addEventListener ('change', handleChange);







