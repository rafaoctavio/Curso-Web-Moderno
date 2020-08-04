const valores = [7.7, 8.9, 6.9, 8.9];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores [4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');

console.log(valores);

console.log(valores.pop());
// pode ser usado o delete que deixa o valor vazio dentro do array
delete valores[0];

console.log(valores); // o valor "teste", tambem saiu pois foi aplicado pop acima.

console.log(typeof valores); //resultado: object
