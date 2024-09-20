import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
              private jwtService: JwtService) {}

  async singIn(data: LoginDto, user_id: number): Promise<{ access_token: string }> {

    const user = await this.userService.findUser(data.email)
    console.log(user.password);

    if (bcrypt.compareSync(user.password, data.password)) {
      console.log('caiu no if', data.password);
      throw new UnauthorizedException();
    }

    const payload = { user_id, user: user };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
