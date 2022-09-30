// Obviamente, se por alguma String vai FALHAR, se aplica Também para os outros Tipos !! <<
const arrayNumbers: number[] = [8, 3, 10, 2, 15];
console.log('arrayNumbers:', arrayNumbers, 'typeof:', typeof (arrayNumbers));
// arrayNumbers.push('fail'); // Vai dar ERRO !! <<

const arrayStrings: string[] = ['testando', 'teste', 'bola', 'mamao'];
console.log('arrayStrings:', arrayStrings, 'typeof:', typeof (arrayStrings));

// Um jeito mais ANTIGO de Tipar arrays, mas funciona (o de CIMA é mais utilizado ATUALMENTE) !! <<
const anotherWay: Array<number> = [2, 8, 4, 10, 7];
console.log('anotherWay:', anotherWay, typeof (anotherWay));