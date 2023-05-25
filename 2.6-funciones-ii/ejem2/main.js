'use sctrict';

// SECCION QUERY SELECTOR

const greetingBtn = document.querySelector('.js_greetingBtn');

const nameInput = document.querySelector('.js_inputName');

const greetingBox = document.querySelector('.js_greetingBox');

// SECCION FUNCIONES

const getName = () => {
    const userName = nameInput.value;
    return userName;
}

const composeGreeting = (name1) => {
    const greeting = `¡Hola, ${name1}!`;
    return greeting;
}

const writeGreeting = (message) => {
    greetingBox.innerHTML = message;
}


//SECCION EVENTOS

greetingBtn.addEventListener('click', () => {
    event.preventDefault();
    //Traer el value del nombre
    const name1 = getName ();

    //Componer saludo
    const greeting = composeGreeting (name1);

    //Escribir en el div de la página el saludo
    writeGreeting(greeting);
});