import { Module } from '@nestjs/common/decorators/modules';
import { OrdersController } from './controllers/OrdersController';
import { OrdersService } from './services/OrderService';
import { UserService } from './services/UserService';
import { AuthService } from './services/AuthService';
import { AuthController } from './controllers/AuthController';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: "30m"},
  })],
  controllers: [OrdersController, AuthController],
  providers: [OrdersService, UserService, AuthService],
})
export class AppModule {}
