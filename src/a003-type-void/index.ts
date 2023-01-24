function semRetorno(...args: string[]): void{
    console.log(args.join(' '));
}

const pessoa = {
    nome:"Enderson",
    sobrenome:"Pereira",

        exibirNome(): void{
            console.log(this.nome + " " + this.sobrenome);
        },
};

semRetorno ('Enderson', 'Fulano');
pessoa.exibirNome();

export { pessoa }
