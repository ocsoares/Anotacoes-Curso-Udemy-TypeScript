// Tupla é um Novo Tipo de ARRAY, mas Especificando o TIPO e a QUANTIDADE de Elementos desse Array !! <<

// EXATAMENTE esses Tipos e Quantidades, nessa ORDEM !! <<
type myTupla = [number, string, boolean, object, string];

const arrayWithTupla: myTupla = [12, 'João', false, { car: 'Uno', year: 2012 }, 'Heitor'];
console.log(arrayWithTupla);

// VAI dar ERRO, porque, nesse caso, no lugar de um Boolean colocou uma String !! <<
// const otherArrayWithTupla: myTupla = [20, 'Pedro', 'Carvalho', { country: 'Brazil', city: 'Londrina' }, 'Heitor'];

// VAI dar ERRO, porque, nesse caso, colocou SEIS elementos AO INVÉS de CINCO !! <<
// const anotherArrayWithTupla: myTupla = [20, 'Pedro', true, { country: 'Brazil', city: 'Londrina' }, 'Heitor', 28];

// VAI dar ERRO, porque, nesse caso, tentou modificar um Elemento Tipado como String para Number !! <<
// arrayWithTupla[1] = 31;

// Exemplo Real de uso:
type infoUserTupla = [string, number];

const user: infoUserTupla = ['João Pedro', 27];
console.log(`O usuário chama ${user[0]} e possuí ${user[1]} anos !`);