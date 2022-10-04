// Permite utlizar um Método de uma Classe SEM precisar Instanciar um NOVO Objeto !! <<

class StaticClass {
    static username: string;
    static age: number;
    static work = 'Farmer';
}

const myStaticClass = {
    name: StaticClass.username = 'João Pedro',
    age: StaticClass.age = 7
};

console.log(myStaticClass);

console.log(StaticClass.work);