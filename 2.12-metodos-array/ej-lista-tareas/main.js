'use sctrict';

// QUERY SELECTOR

const listElem = document.querySelector('.js_listElem');
const inputSearch = document.querySelector('.js_search');

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
const renderAllTask = (tasksToRender) => {
    listElem.innerHTML += '';
    for ( const oneTask of tasksToRender) {
        rendeOneTask(oneTask);
    }
};

// SECCIÓN EVENTOS

inputSearch.addEventListener('input', () => {
    const filteredTasks =
  tasks.filter( (objTask) => objTask.name.includes(inputSearch.value) );
  renderAllTask(filteredTasks);
})


// SECCIÓN CUANDO CARGA LA PÁGINA

renderAllTask(tasks);






