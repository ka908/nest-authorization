import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.services';
import { User } from 'src/user/user.entity';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }
  validate(username: string, password: string): any {
    const user: User = this.userService.getUserByName(username);
    if (user == undefined) throw new UnauthorizedException();
    if (user.password == password) {
      return user;
    }
  }
}
