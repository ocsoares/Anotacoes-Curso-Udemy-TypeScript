// Usado para NEGAR que um Objeto é NULO (NÃO é a mesma coisa que ! no if) !! <<

// Nesse caso, vai dar ERRO óbvio, porque esse ID NÃO existe...
const anyElement = document.getElementById('a');
console.log(anyElement!.baseURI);