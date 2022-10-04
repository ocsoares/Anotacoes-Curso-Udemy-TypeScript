// Os Setters, ao contrário dos Getters, podem MODIFICAR/ATRIBUIR dados, SEM o uso do constructor !! <<
// OBS: Os Setters DEVEM ter APENAS 1 Parâmetro e NÃO retornam um VALOR !! <<

class SettersClass {
    product: string;
    price: number;

    set returnProduct(product: string) {
        if (product.length <= 5) {
            console.log('ERRO. Digite um produto com no mínimo 6 letras !');
            return;
        }

        this.product = product; // ATRIBUINDO Valor !! <<

        console.log(`O nome do produto digitado foi: ${this.product}`);
        return;
    }

    set returnPrice(price: number) {
        if (price <= 10) {
            console.log('Insira um número custando no mínimo 11 reais !');
            return;
        }

        this.price = price;

        console.log(`O preço do produto digitado foi: ${this.price} reais !`);
        return;
    }
}

// Como NÃO tem um constructor, precisa APENAS Instanciar o Objeto, para depois usar os Setters !! <<
const mySetterClass = new SettersClass();

// Precisa passar o Valor das Propriedades para o Setters, que óbvio, estão vazios !! <<
// OBS: NÃO são Métodos, logo, precisa ATRIBUIR o Valor ( = ) !! <<
mySetterClass.returnProduct = 'Macarrão';

mySetterClass.returnPrice = 238.91;

console.log(mySetterClass);