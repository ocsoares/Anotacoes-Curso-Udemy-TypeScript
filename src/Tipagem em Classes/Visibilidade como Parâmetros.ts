// Define a Visibilidade dos Parâmetros DIRETO no constructor !! <<

class ParameterProperties {
    constructor(
        public name: string,
        public age: number,
        private password: string,
        protected homeless: boolean
    ) {
        this.name = name,
            this.age = age,
            this.password = password,
            this.homeless = homeless;
    }

    get returnUser(): object {
        return {
            name: this.name,
            age: this.age,
            password: this.password,
            homeless: this.homeless
        };
    }
}

const newParameterProperties = new ParameterProperties('Bianca', 29, 'bianquinha0094', false);
console.log(newParameterProperties);

console.log(newParameterProperties.name, '\n');
// console.log(newParameterProperties.password); // Vai dar ERRO, porque é private !! <<

console.log(newParameterProperties.returnUser);