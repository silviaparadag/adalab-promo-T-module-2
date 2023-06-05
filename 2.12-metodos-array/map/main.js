'use sctrict';

'use sctrict';

/* */


// 2. MAP

// A) 
const simpleData = [
'Suelen',
'Silvia',
'Sara',
'Rebeca',
'Raquel',
];


/*
const nameLengths =  simpleData.map( (name) => name.length )

console.log(nameLengths);
 */


const lowerNames =  simpleData.map( (name) => name.toLowerCase())

console.log(lowerNames);

/* */
const data = [
{ name: 'Suelen', promo: 'T', city:'Valencia', skills: ['HTML',
'Grid' ] },
{ name: 'Silvia', promo: 'T', city:'A Coruña', skills: ['JS'] }, 
{ name: 'Sara', promo: 'T', city:'Las Palmas', skills: ['React'] }, 
{ name: 'Rebeca', promo:'T', city:'Madrid', skills: ['HTML', 'Js']},
{ name: 'Raquel', promo: 'T', city:'Madrid', skills: ['Scrum', 
'Backend' ] },
{ name: 'Dolores', promo: 'T', city:'A Coruña', skills: ['Backend', 
'MySQL' ] },
];


const names = data.map ( (obj) => obj.name);
console.log(names);

const cities = data.map ( (objAdalaber) => objAdalaber.city);
console.log(cities);


// Por ejemplo, "limpiar datos" y quedarnos solo con name y city, nos creamos un objeto

const cleanData = data.map ( (adalaber) => { return {name: adalaber.name, city: adalaber.city} 
} ); 
console.log(cleanData);
