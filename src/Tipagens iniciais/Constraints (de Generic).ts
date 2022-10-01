// Mesma coisa que o Generic Function, só que RESTRINGE AINDA MAIS, Especificando os Tipos, mas NÃo os Valores (se é Array, por exemplo) !! <<
const checkTheBigger = <T extends string | number>(any: T, otherAny: T): T => {
    if (Number(any) > Number(otherAny)) {
        return any;
    }

    else {
        return otherAny;
    }
};

console.log(checkTheBigger(2, 10));
console.log(checkTheBigger('30', '12'));

// Especificando Argumento
//  OBS: Isso é necessário porque, por exemplo, se passar um STRING e um NUMBER nessa Função, Vai dar ERRO !! <<
console.log(checkTheBigger<string | number>(82, '19'));

// console.log(checkTheBigger('10', 23)) // Vai dar ERRO !! <<