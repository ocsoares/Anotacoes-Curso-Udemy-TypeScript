class MethodsClass {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age;
    }

    returnUser(): string {
        return `O usuário ${this.name} possuí ${this.age} anos !`;
    }
}

const myMethodsClass = new MethodsClass('Tibério Alves', 87);
console.log(myMethodsClass);

console.log(myMethodsClass.returnUser());