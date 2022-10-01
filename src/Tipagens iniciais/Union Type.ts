// Union Type é nada mais que utilizar o | ( OU ) para os Tipos !! <<

const returnSomething = (something: string | number): string | number => {
    return something;
};

console.log(returnSomething('Retornei uma STRING'), typeof (returnSomething('a')));
console.log(returnSomething(12), typeof (returnSomething(12)));
// console.log(returnSomething(['a', 'b']), typeof (returnSomething(['a', 'b']))); // Vai dar ERRO <<<