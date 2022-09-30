// As Funções Genéricas são usadas para Definir como os Dados DEVERÃO ser, OU como o Retorno Deverá ser, SEM definir um Tipo Específico !! <<

// Nesse caso abaixo, é uma Função que Recebe um Array de ALGO, e Retorna esse Array de Algo, SEM Definir o TIPO !! <<
// OBS: É uma Convenção usar T ou U para Generic Functions !!
const genericFunction = <T>(somethingArray: T[]): T[] => {
    return somethingArray;
};

// Array de Números
console.log(genericFunction([1, 20, 30, 99, 23, 40]));

// Array de Strings
console.log(genericFunction(['Roberto', 'Carla', 'Thiago', 'Bernado']));

// Array de Objetos
console.log(genericFunction([{
    Car: {
        Marca: 'Mustang',
        Pneu: 'Aro 16',
        Motor: 'V8'
    },
    Game: {
        Name: 'Battlefield',
        Year: 2018,
        Active: true
    }
}]));

// console.log(genericFunction('Qualquer coisa')) // Vai dar ERRO !! <<

// Também pode ter MAIS de Um Generic em uma Função !! <<
const moreThanOneGeneric = <T, U, C>(any: T, otherAny: U[], anotherAny: { any: C[], otherAny: string; }) => {
    return [
        any,
        otherAny,
        anotherAny
    ];
};

console.log(moreThanOneGeneric('Roberto Silva', ['Melão, Feijão'], { any: ['Higor, João, Wellington'], otherAny: 'Ventilador' }));