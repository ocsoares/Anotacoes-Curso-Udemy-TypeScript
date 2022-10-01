// Pega o typeof de de alguma Variável para usar seu Tipo em OUTRA !! <<
// OBS: Deve ser melhor utilizado para Dados Dinâmicos...

const anyNames: string[] = ['João', 'Pedro', 'Hugo', 'Paulo'];
console.log(anyNames);

// Ao utilizar typeof do jeito que utilizo (com () ), deu ERRO !! <<
const typeAnyNames: typeof anyNames = ['Paulo', 'Marcio', 'Guilherme'];
console.log(typeAnyNames);

// VAI dar Erro, porque NÃO é do Mesmo Tipo de anyNames, óbio !! <<
// const typeAnyNames: typeof anyNames = 'Fernando' ou 12