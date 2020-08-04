const nome = 'Rafael';
const concatenacao = 'Olá ' + nome + '!';
const template = `Olá ${nome}!`
const template2 = `Olá 
                        ${nome}!` //veja como ele respeita a forma como fica editado o texto na forma que está no codigo!

console.log(concatenacao, template, template2);

// expressões:

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);

