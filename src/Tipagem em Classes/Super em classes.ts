// O super é usado em uma Classe que HERDA OUTRA Classe !! <<
// OBS: Na classe Herdada, NÃO precisa declarar as Variáveis do Pai ACIMA do constructor, mas PRECISA Declarar e TIPAR no constructor, depois
// passar no super, SEM o .this !! <<

class FatherClass {
    name;
    age;
    employed;

    constructor(name: string, age: number, employed: boolean) {
        this.name = name,
            this.age = age,
            this.employed = employed;
    }
}

const myFatherClass = new FatherClass('Pedro', 37, false);
console.log(myFatherClass);

class InheritedClass extends FatherClass {
    city;
    homeless;

    constructor(name: string, age: number, employed: boolean, city: string, homeless: boolean) {
        super(name, age, employed);
        this.city = city,
            this.homeless = homeless;
    }
}

const myInheritedClass = new InheritedClass('Jorge', 73, true, 'Brasil', false);
console.log(myInheritedClass);