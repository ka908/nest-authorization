import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
@Injectable()
export class UserService {
  public user: User[] = [
    {
      username: 'user1',
      email: ' test@gmail.com',
      password: 'test',
    },
    {
      username: 'user2',
      email: ' test@gmail.com',
      password: 'test',
    },
    {
      username: 'user3',
      email: ' test@gmail.com',
      password: 'test',
    },
  ];

  getUserByName(username: string): User {
    return this.user.find((user) => user.username === username);
  }
}
