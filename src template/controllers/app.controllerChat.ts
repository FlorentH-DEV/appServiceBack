import { Controller, Get } from '@nestjs/common';
import { AppServiceChat } from '../services/app.serviceChat';

@Controller()
export class AppControllerChat {
  constructor(private readonly appService: AppServiceChat) {}

  @Get("chat")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("allChat")
  getAll(): string {
    return this.appService.getAll()
  }
}
