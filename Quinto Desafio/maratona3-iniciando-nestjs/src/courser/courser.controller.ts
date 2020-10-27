import {Controller, Get, Post, Render, Req, Request} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Course } from "../course.entity"

@Controller('maratona')
export class CourserController {
  
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>
  ){}

  @Get()
  index(){
    return this.courseRepo.find();
  }

  @Get('seed')
  async course_create(){
      const course = await this.courseRepo.create( [
                                                      {name: "DevOps e Containers: do Docker ao Kubernetes", author : "Fabricio Veronez"},
                                                      {name: "Produtividade eXtrema com Python e Django", author : "Henrique Bastos"},
                                                      {name: "Serverless, o mínimo que todo dev precisa saber",author : "Erick Wendel"},
                                                      {name: "As grandes oportunidades  para Full Cycle Developers",author : "Rodrigo Branas / Tiago Baeta / Robson Marques"},
                                                      {name: "O ecossistema de frameworks Javascript",author : "Diego Fernandes"},
                                                      {name: "Multi-O universo do desenvolvimento no Mercado Livre applications com Django",author : "Daniel Ambrosio"},
                                                      {name: "Monitoramento Inteligente + Encerramento",author : "Wesley Willians"},
                                                      {name: "Full Cycle Developer: O passo a passo - Live no Instagram",author : "Wesley Willians"},
                                                      {name: "Microsserviços e Integração Contínua com Sonarqube + Surprise",author : "Wesley Willians"},
                                                    ]);
      this.courseRepo.save(course);
  }

  @Post()
  async store(@Req() request: Request){
    const category = await this.courseRepo.create(request.body as any)
    return this.courseRepo.save(category);
  }
}
