// O Property Decorator é utilizado nas Propriedades de uma Classe, permitindo MODIFICAR/VALIDAR um Valor da Propriedade da Classe !! <<
// OBS: Os passos tomados na execução DEVEM SER SEGUIDOS Corretamente !! <<

const propertyDecorator = () => {
    return (<T>(target: Object, propertyKey: string) => {
        let propToChange: T | string;

        // O Parâmetro, nesse caso newValue, recebe o Valor da Propriedade do Objeto Instanciado da Classe !! <<
        const modifyValue = (newValue: T) => { // Setter
            propToChange = newValue + ' MODIFICADO !';
        };

        const returnValue = () => { // Getter
            return propToChange;
        };

        Object.defineProperty(target, propertyKey, {
            set: modifyValue,
            get: returnValue
        });
    });
};

class propertyDecoratorClass {
    @propertyDecorator()
    name;

    @propertyDecorator()
    age;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age;
    }
}

// OBS: Após passar esse Decorator, é CRIADO um NOVO Objeto, então se der console.log() no Objeto INTEIRO, NÃO irá aparecer a(as) Propi-
// -edades afetadas por esse Decorator, porém, se der console.log() EM CADA Propriedade desse Novo Objeto, IRÁ aparecer !! <<
const newPropertyDecorator = new propertyDecoratorClass('Fernando', 23);
console.log(newPropertyDecorator); // NÃO irá aparecer !! <<

console.log(newPropertyDecorator.name); // IRÁ aparecer !! <<
console.log(newPropertyDecorator.age);

const newObjectDecorator: object = { // Criando um Novo Objeto com as Propriedades Modificadas !! <<
    name: newPropertyDecorator.name,
    age: newPropertyDecorator.age
};
console.log(newObjectDecorator);