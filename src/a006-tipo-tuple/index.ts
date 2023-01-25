//Tuple

const DadosCliente1: readonly [ number, string ] = [ 1, "Enderson" ]
const DadosCliente2: [ number, string, string ] = [ 1, "Enderson", "Pereira" ]
const DadosCliente3: [ number, string, string? ] = [ 1, "Enderson" ]
const DadosCliente4: [ number, string, ...string[] ] = [ 1, "Enderson" ]

console.log(DadosCliente1)
console.log(DadosCliente2)
console.log(DadosCliente3)
console.log(DadosCliente4)

const array1: readonly string[] = [ "Enderson", "De tal" ]
const array2: ReadonlyArray<string> = [ "Enderson", "Barcelos" ]
