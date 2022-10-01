// Isso aqui NÃO é possível !! <<
// const functionTypeObject = ({name: string, age: number}): string => {
//     return `Seu nome é ${name} e sua idade é ${age}`;
// };

// Jeito certo, tem que apenas Declarar as Propriedades do Objeto, e TIPAR ESSE Objeto com OUTRO Objeto com as Mesmas Propriedades, mas Tipado !! <<
const functionTypeObject = ({ name, age }: { name: string, age: number; }): string => {
    return `Seu nome é ${name} e sua idade é ${age}`;
};

console.log(functionTypeObject({ name: 'Fernando Passos', age: 27 }));