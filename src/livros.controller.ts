import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.services";

@Controller('Livros')
export class LivrosController{
    constructor(private LivrosService: LivrosService){

    }

    @Get()
    obterTodos(): Livro[]{
        return this.LivrosService.obterTodos();
    }
    @Get(':id')
    obterUm(@Param() params): Livro {
        return this.LivrosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() Livro: Livro): void{
     this.LivrosService.Criar(Livro);

    }
    @Put()
    alterar(@Body() Livro: Livro): Livro {
       return this.LivrosService.Alterar(Livro);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.LivrosService.apagar(params.id)
    }

}