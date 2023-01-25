//array <T> - T[]

export function MultiplicaArgs(...args: Array<number>): number{
    return args.reduce((ac, valor) => ac * valor, 1)
}
// Array para fazer calculo de multiplicação

export function ConcatenaString(...args: Array<string>): string{
    return args.reduce((ac, valor )=> ac + valor)
}
// Array para fazer junção String

export function toUpperCase(...args: Array<string>): string[]{
    return args.map((valor) => valor.toUpperCase())
}
// Array para fazer pré junção de String

const Result = MultiplicaArgs(1,2,3)
const Concatenacao = ConcatenaString("a","b","c")
const upper = toUpperCase("a","b","c")
//Valor sendo passados

console.log(Result)
console.log(Concatenacao)
console.log(upper)
//saida de resultado
