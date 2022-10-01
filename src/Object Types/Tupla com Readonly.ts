// Usei em Funções apenas para dar um exemplo, funciona para o resto também...

const showArrayNameWithAge = (name: readonly [string, number, string, number]) => {
    return name;
};

const myNamesAndAge = showArrayNameWithAge(['Roberto', 23, 'Júlia', 26]);
console.log(myNamesAndAge);

// myNamesAndAge[2] = 'Alterado' // VAI dar ERRO !! <<