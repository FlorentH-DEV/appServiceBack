import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class AppControllerChien {
  //constructor(private readonly appService: AppService) {}

  @Get("chien")
  getHello(): string {
    return "Chien";
  }
}
