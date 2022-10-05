// Quando tiver múltiplos decorators, a ORDEM de Execução deles é sempre do MAIS PERTO da Funcionalidade em que o Decorator foi apli-
// -cado, ou seja, do MAIS BAIXO para o MAIS ALTO !! <<

const anyDecorator = () => {
    return ((target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) => {
        console.log('Executou o anyDecorator ! (1) ');
    });
};

const otherDecorator = () => {
    return ((target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) => {
        console.log('Executou o otherDecorator ! (2) ');
    });
};

const anotherDecorator = () => {
    return ((target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) => {
        console.log('Executou o anotherDecorator ! (3) ');
    });
};

class DecoratorsClass {
    @anyDecorator()
    @otherDecorator()
    @anotherDecorator()
    returnDecorators(): string {
        return 'Apenas retornando algo...';
    }
}

const newDecoratorsClass = new DecoratorsClass();
console.log(newDecoratorsClass);

console.log(newDecoratorsClass.returnDecorators());