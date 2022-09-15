import { Module } from '@nestjs/common';
import { AppControllerChat } from './controllers/app.controllerChat';
import { AppControllerChien } from './controllers/app.controllerChien';
import { AppServiceChat } from './services/app.serviceChat';
import { AppServiceChien } from './services/app.serviceChien';

@Module({
  imports: [],
  controllers: [AppControllerChat, AppControllerChien],
  providers: [AppServiceChat, AppServiceChien],
})
export class AppModule {}
