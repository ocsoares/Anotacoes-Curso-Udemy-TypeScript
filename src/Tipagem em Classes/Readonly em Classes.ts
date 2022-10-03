class UserBrazil {
    name;
    age;
    work;
    readonly city: string = 'Brasil'; // Como vai ser FIXA (readonly), NÃO precisa colocar no constructor, MAS VAI fazer parte do Objeto !! <<

    constructor(name: string, age: number, work: string) {
        this.name = name,
            this.age = age,
            this.work = work;
    }
}

const newUserBrazil = new UserBrazil('Fernando', 29, 'Farmer');
console.log(newUserBrazil);

// Lógico, VAI dar ERRO !! <<
// newUserBrazil.city = 'Bélgica'