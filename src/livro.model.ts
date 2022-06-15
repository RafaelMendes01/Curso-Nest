export class Livro {
    id: number;
    codico: string;
    nome: string;
    preco: number;

    constructor(codico: string, nome:string, preco:number){
        this.codico = codico;
        this.nome = nome;
        this.preco = preco;
    }
}