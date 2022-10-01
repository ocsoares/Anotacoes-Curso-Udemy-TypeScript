// OBS: Métodos, como o forEach, PODEM alterar o Array, mas por declaração Direta NÃO pode !! <<

const readonlyArray: ReadonlyArray<string> = ['Maçã', 'Mamão', 'Abacate'];
console.log(readonlyArray);

// readonlyArray[2] = 'Alterado'; // VAI dar ERRO !! <<