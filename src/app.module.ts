import { Module } from '@nestjs/common';
import { AppControllerChat } from './controller/app.controllerChat';
import { AppControllerChien } from './controller/app.controllerChien';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppControllerChat, AppControllerChien],
  providers: [AppService],
})
export class AppModule {}
