// O implements é bem parecido com o extends, MAS é mais utilizado para Criar Métodos que várias Classes terão em Comum !! <<
// OBS: A Classe que recebe uma Implementação, DEVE conter as Propriedades da Interface, MAS também pode ter Propriedades PRÓPRIAS !! <<
// OBS: Ao contrário do extends, NÃO usa super, TEM que declarar as Propriedades no constructor e acima dele !! <<

interface IToImplements {
    name: string;
    age: number;
    returnUser(): string;
}

class ImplementsClass implements IToImplements {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age;
    }

    returnUser(): string {
        return `O usuário digitado possúi o nome: ${this.name}, e ${this.age} anos !`;
    }
}

const newImplementsClass = new ImplementsClass('João', 17);
console.log(newImplementsClass);

console.log(newImplementsClass.returnUser());

console.log('\n');

// Classe com o MESMO Implemento da Interface, MAS com Propriedades A MAIS !! <<
class MoreImplementsClass implements IToImplements {
    name;
    age;
    work;
    city;

    constructor(name: string, age: number, work: string, city: string) {
        this.name = name,
            this.age = age,
            this.work = work,
            this.city = city;
    }

    returnUser(): string {
        return `O usuário digitado possuí o nome ${this.name}, ${this.age} anos, sua profissão é ${this.work} e mora em ${this.city}`;
    }
}

const myMoreImplementsClass = new MoreImplementsClass('Eduardo', 26, 'Painter', 'Brazil');
console.log(myMoreImplementsClass);

console.log(myMoreImplementsClass.returnUser());