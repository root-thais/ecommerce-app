import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { StoreService } from './store/store.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [forwardRef(() => StoreModule), ProductModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, StoreService, PrismaService, UserService],
})
export class AppModule {}
