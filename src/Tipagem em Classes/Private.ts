// A visibilidade private SÓ PERMITE que a Propriedade/Método private seja Acessado/Modificada APENAS na Classe em que ela foi DECLARADA !! <<
// OBS: PODE ser usada como Herança, MAS as MESMAS Regras se aplicam !! <<
// OBS: Getters também pode ser usado como 'método' para Acessar o private !! <<

class PrivateClass {
    private name: string;
    private age: number;
    private work: string;

    constructor(name: string, age: number, work: string) {
        this.name = name,
            this.age = age,
            this.work = work;
    }

    private toModifyPrivate(name: string, age: number, work: string): string {
        this.name = name,
            this.age = age,
            this.work = work;

        return `O nome alterado ficou: ${this.name}, a idade: ${this.age} e o trabalho: ${this.work}`;
    }
}

const newPrivateClass = new PrivateClass('Yuri Alberto', 21, 'Jogador de futebol');
console.log(newPrivateClass);

// VAI dar ERRO, porque é PRIVATE !! <<
// console.log(newPrivateClass.toModifyPrivate('Roger Guedes', 24, 'Jogador'));

// VAI dar ERRO, porque é PRIVADO !! <<
// console.log(newPrivateClass.name);

// PODE ser Herdado para Instanciar um NOVO Objeto, APENAS !! <<
class ChildrenPrivate extends PrivateClass {
    constructor(name: string, age: number, work: string) {
        super(name, age, work);
    }

    // NÃO é possível acessar esse Método, porque as Propriedades são EXCLUSIVAMENTE da Classe pai !! <<
    // childrenModify(name: number) {
    //     this.toModifyPrivate('Lionel', 34, 'Jogador');
    //     // this.name = name;
    // }
}

const newChildrenPrivate = new ChildrenPrivate('Roberto', 9, 'Estudante');
console.log(newChildrenPrivate);

// VAI dar ERRO, porque é PRIVATE !! <<
// console.log(newChildrenPrivate.toModifyPrivate('Mário', 19, 'Estagiário'));

// VAI dar ERRO, porque é PRIVATE !! <<
// console.log(newChildrenPrivate.name);