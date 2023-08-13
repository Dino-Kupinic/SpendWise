import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserController} from "./user/user.controller"
import {UserService} from "./user/user.service"
import {PrismaService} from "./prisma/prisma.service"
import {UserModule} from "./user/user.module"

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
