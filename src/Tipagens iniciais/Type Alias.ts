// O Type Alias Tipa VARIÁVEIS/Valores, o Inteface Tipa OBJETOS e pode ADICIONAR mais Tipos em OUTRA Declaração com o MESMO Nome !! <<

type something = string | number;

const returnOtherSomething = (something: something): something => {
    return something;
};

console.log(returnOtherSomething('arroz'), typeof (returnOtherSomething('a')));
console.log(returnOtherSomething(31), typeof (returnOtherSomething(1)));

// console.log(returnOtherSomething(false), typeof (returnOtherSomething(false))); // VAI dar ERRO !! <<