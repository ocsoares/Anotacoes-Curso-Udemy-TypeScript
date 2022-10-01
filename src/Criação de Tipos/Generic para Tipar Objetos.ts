// Tipando os Objetos desse jeito, VÃO ser obrigatórios, nesse caso, as Propriedades name e age, com os Tipos Especificados, PODENDO ter MA- 
// -IS Propriedades no Objeto !!
// OBS: O Objeto vai ser Armazenado no Parâmetro !! <<
const genericObject = <T extends { name: string, age: number; }>(object: T): T => {
    return object;
};

const myObjectGeneric = genericObject({ name: 'Roberto Alves', age: 53, work: 'Farmer', homeless: false });
console.log(myObjectGeneric);

// Vai dar ERRO, porque NÃO tem a Propriedade Tipada, no caso, o age !! <<
// console.log(genericObject({name: 'Felipe Hugh', work: 'Actor', homeless: false})); 