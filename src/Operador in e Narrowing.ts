// in = Checa se EXISTE uma Propriedade dentro de um Objeto !! <<
// OBS: Propriedade + in + Objeto 

class Person {
    name;
    age;
    work;

    constructor(name: string, age: number, work?: string) {
        this.name = name;
        this.age = age;

        // Checa se o Tipo existe no Objeto ( NARROWING ) !! <<
        if (work) {
            this.work = work;
        }
    }
}

const personUnemployed = new Person('Pedro Alves', 23);
console.log('personUnemployed', personUnemployed);

const personEmployed = new Person('Heitor Silva', 37, 'Developer');
console.log('personEmployed:', personEmployed);

const checkIfEmployed = (person: Person): string => {
    // work = PROPRIEDADE do Objeto !!
    if ('work' in person) {
        return `Parabéns ${person.name}, você está empregado !`;
    }

    else {
        return `Que pena ${person.name}, você NÃO está empregado !`;
    }
};

console.log(checkIfEmployed(personUnemployed));
console.log(checkIfEmployed(personEmployed));