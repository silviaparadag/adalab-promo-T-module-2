'use strict';

const texto = 'Un texto';           // String
const numerosEnteros = 42;          // Integer
const numerosReales = 3.141592;     // Float
const objetos = {};
const arrays = [];
const booleanos = true; // sí: true No: false
const sinDefinir = undefined;
const nulo = null;


const variable = 'un texto' // Comilla simple

const stringTemplate = `Este es ${variable}`; //se usa el acento francés y es lo mismo que esto:
const sinStringTemplate = 'Este es' + variable;

// Otra ventaja del string Template (acento francés) es que puede tener varias líneas,  

const stringTemplateMultilinea = `
Una línea
Otra línea 
Otra más
` + "otra cadena y puedo poner apóstrofe o'donell" + 'mezclando simple' + 'y para añadir apóstrofe y que no cierre el string se usa \'';

const stringTemplateMultilinea2 = `
Una línea
Otra línea 
Otra más \n
` + "otra cadena y puedo poner apóstrofe o'donell" + 'mezclando simple' + 'y para añadir apóstrofe y que no cierre el string se usa \'';

