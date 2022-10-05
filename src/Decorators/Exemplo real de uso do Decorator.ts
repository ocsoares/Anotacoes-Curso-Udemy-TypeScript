// Exemplo: Já existe algumas Entidades do Banco de Dados com suas Propriedades definidas, mas por algum motivo precisa incluir a
// Data de Criação a TODAS as Entidades existentes, para evitar Repetição de Código, o melhor é utilizar os Decorators !! <<

// OBS: PRECISA pelo menos DECLARAR essa Nova Propriedade dentro da Classe, Tipando como OPCIONAL e o Tipo dela !! <<

const createdDateDecorator = (created_at: Function) => {
    created_at.prototype.created_at = new Date(); // ...prototype.NOME da NOVA Propriedade !! <<
};

@createdDateDecorator
class UserClass {
    name;
    age;
    cpf;
    created_at?: Date;

    constructor(name: string, age: number, cpf: string) {
        this.name = name,
            this.age = age,
            this.cpf = cpf;
    }
}

@createdDateDecorator
class AdminClass {
    name;
    role;
    canEdit;
    created_at?: Date;

    constructor(name: string, role: string, canEdit: boolean) {
        this.name = name,
            this.role = role,
            this.canEdit = canEdit;
    }
}

const newUser = new UserClass('Igor', 27, '90102488');
console.log(newUser);

const newAdmin = new AdminClass('Adolfo', 'Admin', true);
console.log(newAdmin);

// Acessando a Nova Propriedade
console.log(newUser.created_at);
console.log(newAdmin.created_at);