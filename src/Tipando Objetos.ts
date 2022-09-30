// Obviamente, se por o Valor de uma Propriedade com Tipo ERRADO, VAI dar ERRO !! <<

// MENOS COMUM, porque bastava usar a Inferência do TypeScript (apenas Declarar o Valor, porque o tipo ia ser Detectado AUTOMATICAMENTE) !! <<
const myObject: { adress: string, cep: number, abandoned: boolean; } = {
    adress: 'Rua Franco da Rocha',
    cep: 9015129,
    abandoned: false
};

console.log('myObject:', myObject);

const returnObject = (object: { user: string, password: string, cpf: number; }): object => {
    return object;
};

console.log(returnObject({ user: 'Robert Silva', password: 'robert123', cpf: 193020500 }));
