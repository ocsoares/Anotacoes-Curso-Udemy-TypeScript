interface ICommonUser {
    name: string,
    password: string;
}

// Herda TUDO de ICommonUser, mas também adiciona a Propriedade Especificada !
interface IAdministrator extends ICommonUser {
    logs: string[]; // O array ÓBVIAMENTE foi apenas um exemplo, funciona sem também...
}

const commonUser: ICommonUser = {
    name: 'Roberto Ferraz',
    password: '89320abc'
};
console.log(commonUser);

const administrator: IAdministrator = {
    name: 'Luis Diaz',
    password: 'luiz9030',
    logs: ['logou', 'modificou dados', 'deslogou']
};
console.log(administrator);