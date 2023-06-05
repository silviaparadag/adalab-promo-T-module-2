'use sctrict';'use sctrict';

'use sctrict';

/* */


// 3. FIND / FINDINDEX / INDEXOF


const simpleData = [
'Suelen',
'Silvia',
'Sara',
'Rebeca',
'Raquel',
];


// A) INDEX OF: Solo vale para array de datos simples

/* */
const positionSara = simpleData.indexOf('Sara');
console.log(positionSara);

// B) FINDINDEX:

const positionSara2 = simpleData.findIndex( (name) => name === 'Sara');
console.log(positionSara2);


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

// B) FINDINDEX:
const positionSara3 = data.findIndex( (adalaber) => adalaber.name === 'Sara');
console.log(positionSara3);

// C: FIND
const saraInfo = data.find( (adalaber) => adalaber.name === 'Sara');
console.log(saraInfo);