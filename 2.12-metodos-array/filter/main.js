'use sctrict';

/* */


// 1. FILTER 

// A) 
const simpleData = [
'Suelen',
'Silvia',
'Sara',
'Rebeca',
'Raquel',
];


// const nameWithS = simpleData.filter( (name) => name.includes('S') && name.includes('a'));

// const nameWithS = simpleData.filter( (name) => name.includes('S'));

// Esto es lo mismo que la siguiente sintaxis:

/* const nameWithS = simpleData.filter( (name) => name.includes('S')).filter ((name) => name.includes('a'));
*/

// Esto es lo mismo que la anterior sintaxis, pero ordenado en varias líneas
const nameWithS = simpleData
.filter( (name) => name.includes('S'))
.filter ((name) => name.includes('a'));

console.log(nameWithS);

const data = [
{ name: 'Suelen', promo: 'T', skills: ['HTML',
'Grid' ] },
{ name: 'Silvia', promo: 'T', skills: ['JS'] }, 
{ name: 'Sara', promo: 'T', skills: ['React'] }, 
{ name: 'Rebeca', promo:'T', skills: ['HTML', 'Js']},
{ name: 'Raquel', promo: 'T', skills: ['Scrum', 
'Backend' ] },
{ name: 'Dolores', promo: 'T', skills: ['Backend', 
'MySQL' ] },
];


//const nameWithS2 = data.filter( (objDataAdalaber) => objDataAdalaber.name.includes('S') );

const nameWithS2 = data.filter( (objDataAdalaber) => objDataAdalaber.name.toLowerCase().includes('s') );
console.log(nameWithS2);


const adalabersOfPromoT = data.filter( (objData) => objData.promo === 'T' );
console.log(adalabersOfPromoT);