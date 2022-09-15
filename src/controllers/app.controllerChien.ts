import { Controller, Get } from '@nestjs/common';
import { AppServiceChien } from 'src/services/app.serviceChien';

@Controller()
export class AppControllerChien {
  constructor(private readonly appService: AppServiceChien) {}

  @Get("chien")
  getHello(): string {
    return this.appService.getHello();
  }
}
