let typeObjectArray: { name: string, age: number, homeless: boolean; }[] = [];

// typeObjectArray = {name: 'aa', age: 12, homeless: false}; // VAI dar ERRO !! <<

typeObjectArray = [{ name: 'Pedro', age: 12, homeless: false }]; // CORRETO !! <<
console.log(typeObjectArray);

typeObjectArray = [{ name: 'Carlos', age: 29, homeless: false }, { name: 'Bárbara', age: 62, homeless: true }]; // CORRETO !! << ...
console.log(typeObjectArray);