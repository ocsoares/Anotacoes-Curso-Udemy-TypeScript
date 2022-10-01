// Instanceof = Mostra se a Instância de um OBJETO pertence a uma denominada Classe !! <<

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Também pode ser usado para outra Classe SEM ser extends !! <<
class Admin extends User {
    administration: boolean;

    constructor(administration: boolean, name: string) {
        super(name);
        this.administration = administration;
    }
}

const myUser = new User('Robert');
console.log('myUser:', myUser);

const myAdmin = new Admin(true, 'Gustavo');
console.log('myAdmin:', myAdmin);

const myEmployee = new Employee('Victor', 27);
console.log('myEmployee', myEmployee);

// NESSE caso, como os tem A MESMA Classe User, mas Admin tem HERDADO, então precisa Verificar PRIMEIRO se tem o Admin !! <<
const checkClassAccount = (account: object) => {
    if (account instanceof Employee) {
        return 'Você é um Funcionário !';
    }

    else if (account instanceof Admin) {
        return 'Você é Administrador !';
    }

    else if (account instanceof User) {
        return 'Você é um usuário Comum !';
    }
};

console.log(checkClassAccount(myEmployee));
console.log(checkClassAccount(myAdmin));
console.log(checkClassAccount(myUser));