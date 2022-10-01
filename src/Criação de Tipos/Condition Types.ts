// Nesse caso, se Obedecer uma Condição, o Tipo vai ser de um jeito, SE NÃO, de outro jeito !! <<

// Exemplos
interface ITest { }
interface IAnotherTest extends ITest { }

// Verifica DENTRO do ITest se existe a Prop. name e se ela é string !! <<
type testType = ITest extends { name: string; } ? number : boolean[];

const checkTestType: testType = [true, false, false, true];
console.log(checkTestType);

type checkType = IAnotherTest extends ITest ? string : number;

const testCheckType: checkType = 'Fernando Bastos';
console.log(testCheckType);

// VAI dar ERRO, porque como a Condição é VERDADEIRA, vai ser Tipada como string !! <<
// const testCheckType: checkType = 1;