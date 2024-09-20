import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-users')
  async getUsers(@Res() res: Response, @Req() req: Request) {
    const users = await this.userService.getUsers()

    if(users) {
      return res.status(200).json(users)
    }

    return res.status(404).json({
      error: "Nenhum usuário encontrado."
    })
  }

  @Get(':id')
  async getUser(@Param('id') user_id: string, @Res() res: Response, @Req() req: Request) {
    console.log('no controller de getUser');
    const user = await this.userService.getUser(user_id)

    if(user) {
      return res.status(200).json(user)
    }

    return res.status(404).json({
      error: "Não foi possível encontrar este usuário."
    })

  }

  @Get('get-admins')
  async getAdmins(@Res() res: Response, @Req() req: Request) {
    const admins = await  this.userService.getUsersAdmin()

    if(admins) {
      return res.status(200).json(admins)
    }

    return res.status(404).json({
      error: "Nenhum usuário administrador encontrado."
    })
  }

  @Get('get-sellers')
  async getSellers(@Res() res: Response, @Req() req: Request) {
    const sellers = await this.userService.getUserSeller()

    if(sellers) {
      return res.status(200).json(sellers)
    }

    return res.status(404).json({
      error: "Nenhum usuário vendedor encontrado."
    })
  }

  @Get('get-clients')
  async getClients(@Res() res: Response, @Req() req: Request) {
    const clients = await this.userService.getUsersClient()

    if(clients) {
      return res.status(200).json(clients)
    }

    return res.status(404).json({
      error: "Nenhum usuário cliente encontrado."
    })
  }

  @Post('new-admin')
  async newUserAdmin(@Body() data: UserDto, user_id: number, @Res() res: Response, @Req() req: Request) {
      const user = await this.userService.createUserAdmin(data, user_id)

      if(user) {
        return res.status(201).json({
          message: "Usuário admin criado com sucesso!"
        })
      }

      return res.status(403).json({
        error: "Erro ao criar usuário."
      })
  }

  @Post('new-seller')
  async newUserSeller(@Body() data: UserDto, user_id: number, @Res() res: Response, @Req() req: Request) {
    const seller = await this.userService.createUserSeller(data, user_id)

    if(seller) {
      return res.status(201).json({
        message: "Usuario vendedor criado com sucesso!"
      })
    }

    return res.status(403).json({
      error: "Erro ao criar usuário vendedor."
    })
  }

  @Post('new-client')
  async newUserClient(@Body() data: UserDto, user_id: number, @Res() res: Response, @Req() req: Request) {
    const client = await this.userService.createUserClient(data, user_id)
    console.log(client);
    if(client) {
      return res.status(201).json({
        message: "Cliente registrado com sucesso!"
      })
    }

    return res.status(403).json({
      error: "Erro ao se registrar."
    })
  }

  @Patch('update-user/:id')
  async updateUser(@Body() data: UserDto, @Param('id') user_id: string, @Res() res: Response, @Req() req: Request) {
    const user = await this.userService.changeUser(data, user_id)

    if(user) {
      return res.status(200).json({
        message: "Usuário atualizado com sucesso!"
      })
    }

    return res.status(403).json({
      error: "Erro ao editar usuário."
    })
  }

  @Delete('delete-user/:id')
  async deleteUser(@Param('id') user_id: string, @Res() res: Response, @Req() req: Request) {
    const user = await this.userService.destroyUser(user_id)

    if(user) {
      return res.status(200).json({
        message: "Usuário excluido com sucesso!"
      })
    }

    return res.status(404).json({
      error: "Erro ao excluir usuário."
    })
  }

}
