// Ao contrário da Herança, esse método JUNTA 2 ou mais Interfaces em UMA !!

interface INamePet {
    name: string;
}

interface IAgePet {
    age: number;
}

type IPet = INamePet & IAgePet;

const myPet: IPet = {
    name: 'Gulian',
    age: 8
};

console.log(myPet);