import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.services';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
