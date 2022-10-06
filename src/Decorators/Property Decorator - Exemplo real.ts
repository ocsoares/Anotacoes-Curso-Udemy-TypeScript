const upperCaseDecorator = () => {
    return ((target: Object, propertyKey: string) => {
        let newString: string;

        const setter = (string: string) => {
            newString = string.toUpperCase();
        };

        const getter = () => {
            return newString;
        };

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    });
};

class UserCheckInfoClass {
    @upperCaseDecorator()
    username;

    @upperCaseDecorator()
    country;

    @upperCaseDecorator()
    city;

    @upperCaseDecorator()
    mother_name;

    constructor(username: string, country: string, city: string, mother_name: string) {
        this.username = username;
        this.country = country;
        this.city = city;
        this.mother_name = mother_name;
    }
}

const myUserCheckInfo = new UserCheckInfoClass('Felipe', 'Brasil', 'Sergipe', 'Rafaela');
console.log(myUserCheckInfo); // Vazio porque Cria um NOVO Objeto, óbvio... 

const upperCaseUserCheck = {
    username: myUserCheckInfo.username,
    country: myUserCheckInfo.country,
    city: myUserCheckInfo.city,
    mother_name: myUserCheckInfo.mother_name
};

console.log(upperCaseUserCheck);