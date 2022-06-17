import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.services";

@Controller('Livros')
export class LivrosController{
    constructor(private LivrosService: LivrosService){

    }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.LivrosService.obterTodos();
    }
    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.LivrosService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() Livro: Livro){
     this.LivrosService.Criar(Livro);

    }
    @Put()
    async alterar(@Body() Livro: Livro): Promise<[number, Livro[]]> {
       return this.LivrosService.alterar(Livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.LivrosService.apagar(params.id)
    }

}