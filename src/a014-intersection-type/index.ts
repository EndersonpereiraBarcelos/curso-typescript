type  TemNome = { name: string};
type  TemSobrenome = { name2: string };
type  TemIdade = { age: number };
type  Pessoa = TemNome & TemSobrenome & TemIdade; // &&&& and 

const pessoa: Pessoa = {
     name: 'José',
     name2: "aaa",
     age: 30,

}

console.log(pessoa)

export { pessoa }
