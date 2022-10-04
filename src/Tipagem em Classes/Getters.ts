// Transforma uma FUNÇÃO em uma PROPRIEDADE da Classe, logo, NÃO precisa do () no final !! <<
// OBS: Os getters NÃO podem ter Parâmetros e APENAS LEEM dados !! <<

class GettersClass {
    name;
    age;
    work;

    constructor(name: string, age: number, work: string) {
        this.name = name,
            this.age = age,
            this.work = work;
    }

    get returnUser(): object {
        return {
            name: this.name,
            age: this.age,
            work: this.work
        };
    }
}

const myGettersClass = new GettersClass('José', 32, 'Farmer');
console.log(myGettersClass);

console.log('Retorno do getters:', myGettersClass.returnUser);