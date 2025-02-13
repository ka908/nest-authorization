import { Module } from '@nestjs/common';
import { UserService } from './user.services';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
