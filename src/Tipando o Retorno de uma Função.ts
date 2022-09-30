// OBS: Vai dar erro na Função se NÃO tiver um Retorno ou o Retorno for do TIPO ERRADO !! <<

const sum = (num: number, otherNumber: number): number => {
    return num + otherNumber;
};

console.log(sum(2, 3), 'typeof:', typeof (sum(2, 3)));

const returnArrayString = (array: string[]): string[] => {
    return array;
};

console.log(returnArrayString(['teste', 'testando boy', 'bola', 'maça', 'arroz']), 'typeof:', typeof (returnArrayString(['a', 'b', 'c'])));