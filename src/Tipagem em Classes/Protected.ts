// Métodos/Variáveis Tipadas como protected SÓ podem ser Acessadas por Subclasses (FILHAS) e por meio de MÉTODOS !! <<
// OBS: Os Tipados com protected PODEM ser Acessados/Modificados com .this em Subclasses, MAS da mesma forma, FORA dessas Subclas-
// -ses, NÃO podem ser Acessados fora de um MÉTODO !! << 
// OBS: Getters também pode ser usado como 'método' para Acessar o protected !! <<

class FatherProtected {
    name;

    protected number: number;
    protected year: number;

    constructor(name: string) {
        this.name = name;
    }
}

// Acessar por meio do extends (Classe PAI) e o Conteúdo protected por meio do .this !! <<
class AccessProtected extends FatherProtected {
    constructor(name: string) {
        super(name);
    }

    // Método para o protected !! <<
    toAccessProtected(number: number, year: number): string {
        this.number = number;
        this.year = year;

        return `O número digitado foi ${this.number}, no ano de ${this.year}`;
    }
}

const newFatherProtected = new FatherProtected('João Gomes');

// Se o conteúdo protected tiver algum Valor, IRÁ aparecer no console.log, MAS NÃO é possível Acessar !! <<
console.log(newFatherProtected);

// VAI dar ERRO (porque é PROTEGIDA) !! <<
// console.log(newFatherProtected.number)

const newAccessProtected = new AccessProtected('Roberto França');
console.log(newAccessProtected);

// Acessando os protected !! <<
console.log(newAccessProtected.toAccessProtected(874, 2022));