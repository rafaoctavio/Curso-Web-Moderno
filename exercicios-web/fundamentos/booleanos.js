let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1

console.log(!!isAtivo);


console.log('os verdadeiros ...')
console.log(!!5);
console.log(!!-2);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('para finalizar...');
console.log(!!''|| null || 0 || 'epa'); //epa é verdadeiro dentro do contexto do mostrado no teste se algum valor for verdadeiro o resultado será verdadeiro.

//Exemplos de aplicação

let nome = ''

console.log(nome || "Desconhecido"); //resultado é "Desconhecido" pois apensar de nome ser uma sting vazia e este resultado ser false na comparação dentro do console.log há a informação "desconhecido" que é verdadeira
