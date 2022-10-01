interface IUser {
    name: string,
    role: string;
    active?: 'ativo' | 'desativado';
}

const checkAnyUser = (user: IUser): string => {
    if (user.active) {
        return `O usuário ${user.name}, com o cargo de ${user.role} está ${user.active} !`;
    }

    return `O usuário ${user.name} possuí o cargo de ${user.role}.`;
};

console.log(checkAnyUser({ name: 'Fernando', role: 'Gerente', active: 'ativo' }));
console.log(checkAnyUser({ name: 'Hugo', role: 'Funcionário', active: 'desativado' }));

const myUserInterface: IUser = {
    name: 'Gustavo',
    role: 'Administrador'
};

console.log(checkAnyUser(myUserInterface));