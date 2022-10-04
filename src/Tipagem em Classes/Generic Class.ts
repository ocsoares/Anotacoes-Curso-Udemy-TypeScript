// Tipando com Valores Genéricos !! <<

class GenericClass<T, U> {
    employee: T;
    house: U;

    constructor(employee: T, house: U) {
        this.employee = employee,
            this.house = house;
    }
}

const newGenericClass = new GenericClass('Desempregado', false);
console.log(newGenericClass);

const otherGenericClass = new GenericClass(false, { street: 'Avenida Vargas', number: 9233 });
console.log(otherGenericClass);