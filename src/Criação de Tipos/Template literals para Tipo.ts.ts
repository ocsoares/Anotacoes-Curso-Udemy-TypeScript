// Usado para Tipar algo LITERAL digitado !! <<

// EXEMPLO:

// Fiz isso porque o type só aceita OUTRO type como valor, por exemplo, const NÃO funciona !! <<
type anyNumber = 12;

type templateLiteral = `O número digitado foi: ${anyNumber}`;

// PRECISA ser Exatamente igual da Tipagem Recebida !! <<
const testTemplateLiteral: templateLiteral = `O número digitado foi: 12`;
console.log(testTemplateLiteral);

// VAI dar ERRO, porque, nesse caso, o Número PRECISA ser 12 !! <<
// const otherTestTemplateLiteral: templateLiteral = `O número digitado foi: 13`;
