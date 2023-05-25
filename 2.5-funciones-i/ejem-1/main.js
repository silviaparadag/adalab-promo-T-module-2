'use scrict';

/* se puede agrupar código con las {} */

/*
{
    console.log('Esto es un error');
    console.log('Esto es una info');
    console.log('Hola Adalabers');
}
/*

/*
if ( 2+2 === 5) {
    console.log('Esto es un error')
}
else {
    console.log('Esta funcionando bien')
}
/*

FUNCIONES
/* Las funciones nos evitan repetir código */

// Aquí declaro la función, pero no la ejecuto. 
function saluda() {
    console.log('Hola, Adalabers')
}

// Para que se ejecuto, tengo que nombrarla de nuevo.
saluda ();


// SCOPE (ámbito)LOCAL Y GLOBAL
function saludarMola() {
    const name = 'Hola, Adalabers molones';
    /* Esta variable/constante está dentreo de "saluda()" y no está en lo global. 
    Funcionaría del global al local, pero NO al revés*/
    console.log(name)
}

saludarMola();

const fecha = Date();


