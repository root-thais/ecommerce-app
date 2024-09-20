import { UserDto } from './user.dto';

export class LoginDto extends UserDto {
  email: string
  password: string
}