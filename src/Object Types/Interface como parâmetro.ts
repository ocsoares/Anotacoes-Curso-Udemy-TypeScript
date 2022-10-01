interface ICar {
    name: string;
    model: string;
    year: number;
    forSale: boolean;
}

const returnAnyCar = (car: ICar): string => {
    if (car.forSale) {
        return `O carro chamado ${car.name}, modelo ${car.model}, ano ${car.year}, ESTÁ a venda !`;
    }

    return `O carro chamado ${car.name}, modelo ${car.model}, ano ${car.year}, NÃO está a venda !`;
};

console.log(returnAnyCar({ name: 'Mustang', model: 'Ford', year: 2017, forSale: true }));

const myCar: ICar = {
    name: 'Gol',
    model: 'Volkswagen',
    year: 2016,
    forSale: false
};

console.log(returnAnyCar(myCar));