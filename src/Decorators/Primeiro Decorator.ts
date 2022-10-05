// Um decorator é criado como se fosse uma Função, e Retorna uma FUNÇÃO, com os TRÊS Parâmetros abaixo, que Dependendo onde é executado,
// o Resultado é Diferente !! <<
// OBS: Mesmo se a classe NÃO for utilizada, os Decorators IRÃO ser Utilizados !! <<

const firstDecorator = () => {
    return ((target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) => {
        console.log('Target:', target);
        console.log('propertyKey:', propertyKey);
        console.log('descriptor:', descriptor);
    });
};

class DecoratorClass {
    @firstDecorator()
    decoratorFunction(): string {
        return 'Executando a função que vai RECEBER o Decorator...';
    }
}

const newDecoratorClass = new DecoratorClass();
console.log(newDecoratorClass);

console.log(newDecoratorClass.decoratorFunction());