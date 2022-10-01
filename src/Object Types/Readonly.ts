// Readonly é usado para manter um VALOR CONSTANTE em um Objeto, NÃO permitindo Alterar !! <<

interface IOtherCar {
    model: string;
    forSale: boolean;
    readonly wheels: number;
}

const myOtherCar: IOtherCar = {
    model: 'Ferrari',
    forSale: false,
    wheels: 4
};

console.log(myOtherCar);

// Alterando !!
myOtherCar.model = 'Carro alterado';
myOtherCar.forSale = true;
// myOtherCar.wheels = 5 // VAI dar Erro, porque é Readonly, então NÃO pode alterar !! <<

console.log(myOtherCar);