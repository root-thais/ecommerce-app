import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../dto/login.dto';
import { Request, Response } from 'express';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async singIn(@Body() data: LoginDto, user_id: number, @Res() res: Response, @Req() req: Request) {
    const login = await this.authService.singIn(data, user_id)

    if(login) {
      return res.status(201).json({
        message: "Login realizado com sucesso!",
        login
      })
    }

    return res.status(403).json({
      error: "Erro ao realizar login."
    })
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Req() req: Request) {
    console.log('request', req.user);
    return req.user
  }

}
