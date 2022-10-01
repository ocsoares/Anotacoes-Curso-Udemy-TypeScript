interface IGeneric<T> {
    name: string;
    age: T;
    work: T;
}

// A Interface fica Genérica, mas quando for Atribuir a algum Objeto precisa TIPAR dentro dos <> !! <<
const genericObjectInterface: IGeneric<string> = {
    name: 'Guilherme',
    age: '12',
    work: 'Farmer'
};

// Como cada Generic vai assumir um Tipo diferente, precisa colocar outros Generic's para cada Propriedade !! <<
interface IType<T, U> {
    name: string;
    age: T;
    work: U;
}

type oneGenericString = IGeneric<string>;
type severalGeneric = IType<number, string>;

const oneGenericObject: oneGenericString = {
    name: 'Bernando',
    age: '32',
    // age: 32 // VAI dar ERRO, porque está Tipada como STRING !! <<
    work: 'Painter'
};
console.log(oneGenericObject);

const severalGenericObject: severalGeneric = {
    name: 'Fernanda',
    // age: '47' // VAI dar ERRO, porque está Tipada como NUMBER !!
    age: 47,
    work: 'brickplayer' // Se fosse Number, erro...
};
console.log(severalGenericObject);

// severalGenericObject.name = 30 // VAI dar ERRO, porque está Tipada como String !! <<