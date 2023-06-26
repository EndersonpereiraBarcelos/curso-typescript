/* eslint-disable*/


//Tipos basicos(aqui inferencias de tipos)
let name: string = "Enderson" //qualquer tipor de string "", '', ``
let idade: number = 19 //10, 1.11, -5.55, 0xf00d, 0o7744
let adulto: boolean = true
let simbolo: Symbol = Symbol('qualquer-Symbol')//symbol
let big: bigint = 10n;//bigint

//Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

//Objetos
let pessoa: { name: string, idade: number, adulto?: boolean }= {
    name:"Endersonpb",
    idade:19
}

//funções
function soma(x: number, y: number): number{
    return x + y;
}

const soma2: (x: number, y:number)=> number =(x + y )=> x + y;

export default 1;
