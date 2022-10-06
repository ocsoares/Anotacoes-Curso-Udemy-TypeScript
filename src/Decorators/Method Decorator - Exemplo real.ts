// Antes de Executar o Método da Classe, esse Decorator IRÁ CHECAR uma Condição, e fazer algo Dependendo do Resultado !!
// OBS: Tive que usar function no descriptor.value porque o this NÃO é acessível com Arrow Function !! <<

const checkIfPasswordChangedDecorator = () => {
    return ((target: Object, key: string, descriptor: PropertyDescriptor) => {
        const childMethod = descriptor.value; // Isso aqui RETORNA o Método da Classe !! <<
        descriptor.value = function (...args: any[]) { // Pega TODOS os Argumentos da Função, em uma LISTA do Tipo any !! <<

            // OBS: Por algum motivo, o args só está Retornando a SENHA, então tive que usar o this para acessar o alreadyChanged !! <<

            interface IPropObject {
                alreadyChanged: boolean;
                name: string;
                password: string;
            }
            const propObject: IPropObject = this as any;

            if (propObject.alreadyChanged) {
                return 'Não foi possível alterar a senha, porque ela foi alterada recentemente !';
            }
            else {
                return childMethod.apply(this, args); // O this contém AS PROPRIEDADES do Objeto, e args, NESSE CASO, a Senha !! !! <<
            }
        };
        return descriptor;
    });
};

class ChangePasswordClass {
    name;
    password;
    alreadyChanged: boolean = false;

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

console.log(changePassword.changePassword('testeDecorator!'));
console.log(changePassword);