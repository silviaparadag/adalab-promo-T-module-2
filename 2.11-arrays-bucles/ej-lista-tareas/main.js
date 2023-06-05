'use sctrict';

// QUERY SELECTOR

const listElem = document.querySelector('.js_listElem');

// DATOS

const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner lavadora', completed: true},
    {name: 'Aprender peticiones servidor JS', completed: false},
];


// SECCIÓN FUNCIONES

const rendeOneTask = (oneTask) => {
    listElem.innerHTML += ` 
        <li>
            <input type="checkbox">
            <span> ${oneTask.name} </span>
        </li>
        `;
}
// Este sería el paso 3 con el bucle dentro de una función
const renderAllTask = () => {
    for ( const oneTask of tasks) {
    rendeOneTask(oneTask);
}
};

// SECCIÓN EVENTOS



// SECCIÓN CUANDO CARGA LA PÁGINA

renderAllTask();


/* Paso siguiente, hacelo con blucle para evitar tanto copy/paste:
for ( const oneTask of tasks) {
    rendeOneTask(oneTask);
}

Esto es mejor hacerlo con el bucle de arriba:
let oneTask = tasks[0];

rendeOneTask(oneTask);

let oneTask = tasks[0];

rendeOneTask(oneTask);
let oneTask = tasks[0];

rendeOneTask(oneTask);


// OPCIÓN INICIAL DEL PLANTEAMIENTO, antes de empezar a simplificarlo.
/*
listElem.innerHTML += ` 
    <li>
        <input type="checkbox">
        <span> ${oneTask.name} </span>
    </li>
    `;

oneTask = tasks[1];

listElem.innerHTML += ` 
    <li>
        <input type="checkbox">
        <span> ${oneTask.name} </span>
    </li>
    `;

oneTask = tasks[2];

listElem.innerHTML += ` 
    <li>
        <input type="checkbox">
        <span> ${oneTask.name} </span>
    </li>
    `;
    */




