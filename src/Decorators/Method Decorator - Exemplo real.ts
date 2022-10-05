const checkIfPasswordChangedDecorator = () => {
    return ((target: Object, key: string, descriptor: PropertyDescriptor) => {
        const childMethod = descriptor.value; // Isso aqui RETORNA o Método da Classe !! <<
        descriptor.value = ((...args: any[]) => { // Pega TODOS os Argumentos da Função, em uma LISTA do Tipo any !! <<
            if (args[1] === 'a') {
                return null;
            }
            else {
                // return childMethod.apply(this, args); // TERMINAR <<
            }
        });
    });
};

class ChangePasswordClass {
    name;
    password;
    alreadyChanged: boolean;

    constructor(name: string, password: string) {
        this.name = name,
            this.password = password;
    }

    @checkIfPasswordChangedDecorator()
    changePassword(newPassword: string): string {
        this.password = newPassword;
        this.alreadyChanged = true;

        return `Senha alterada com sucesso ! Sua nova senha é ${this.password}`;
    }
}

const changePassword = new ChangePasswordClass('Victor Alves', 'victor1193');
console.log(changePassword);

console.log(changePassword.changePassword('SenhaAlterada123!'));
console.log(changePassword);