import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    Livros: Livro[] = [
        new Livro("LIV01", "livro 1", 20),
        new Livro("LIV02", "livro 2", 30),
        new Livro("LIV03", "livro 3", 40),
        new Livro("LIV04", "livro 4", 50),
        new Livro("LIV05", "livro 5", 60),
    ];

    obterTodos(): Livro[] {
        return this.Livros;
    }

    obterUm(id: number): Livro {
        return this.Livros[0];
    }

    Criar(Livro: Livro){
        this.Livros.push();
    }

    Alterar(Livro: Livro): Livro{
        return Livro;
    }

    apagar(id: number){
        this.Livros.pop();
    }
}