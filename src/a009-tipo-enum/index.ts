enum Cores{
    vermelho = 10,
    azul = 100,
    amarelo = 200,
}

enum cores{
    roxo = "roxo",
    verde = 201,
    rosa,
}

function escolherCor(cor: Cores): void{
    console.log((Cores[cor]))
}

escolherCor(123456)
