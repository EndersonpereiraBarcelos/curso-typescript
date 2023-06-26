type Idade = number
type Pessoa = {
    name:string
    idade: Idade
    salario: number
    corPreferida?: string
}

type corRGB = 'Vermelho' | 'Azul ' | 'Amarelo'
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = corRGB | corCMYK

const pessoa: Pessoa = {
    name: 'Enderson',
    idade: 19,
    salario: 3.200

}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa{
    return{ ...pessoa, corPreferida: cor}
}
console.log(pessoa)
console.log(setCorPreferida(pessoa, 'Ciano'))
