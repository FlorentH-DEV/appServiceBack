import { Module } from '@nestjs/common';
import { AppControllerChat } from './controllers/app.controllerChat';
import { AppControllerChien } from './controllers/app.controllerChien';
import { AppServiceChat } from './services/app.serviceChat';
import { AppServiceChien } from './services/app.serviceChien';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './model/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'my-secret-pw',
      database: 'test',
      entities: entities,
      synchronize: true,
    }),
  ],
  controllers: [AppControllerChat, AppControllerChien],
  providers: [AppServiceChat, AppServiceChien],
})
export class AppModule {}
