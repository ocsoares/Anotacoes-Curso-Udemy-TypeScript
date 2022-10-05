// No PARÂMETRO do Class Decorator, precisa passar um Parâmetro Tipado com Function !! <<
// OBS: Esse tipo de decorator é utilizável ACIMA da Classe !! <<

const decoratorToClass = () => {
    return ((constructor: Function) => {
        console.log(constructor); // Pode acessar Métodos !! <<

        if (constructor.name === 'MyClassDecorator') {
            console.log('Classe ativada: MyClassDecorator !');
        }

        if (constructor.length >= 2) {
            console.log('Classe detectada com 2 ou mais Propriedades !');
        }
    });
};

@decoratorToClass()
class MyClassDecorator {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age;
    }
}

const newClassDecorator = new MyClassDecorator('Pedro Alves', 32);
console.log(newClassDecorator);