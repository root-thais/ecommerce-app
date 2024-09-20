import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreDto } from '../dto/store.dto';
import { Request, Response } from 'express';
import { User } from '@prisma/client';
import { AuthGuard } from '../auth/auth.guard';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('list-stores')
  async getListStore(@Res() res: Response, @Req() req: Request) {
    const stores = await this.storeService.listStore()

    if(stores) {
      return res.status(200).json(stores)
    }

    return res.status(404).json({
      error: "Nenhuma loja cadastrada."
    })
  }

  @Get(':id')
  async viewStore(@Param('id') id: string, @Res() res: Response) {
    const store = await this.storeService.getStore(id)

    if(store) {
      return res.status(200).json(store)
    }

    return res.status(404).json({
      error: "Loja não encontrada."
    })

  }

  @UseGuards(AuthGuard)
  @Post('new-store')
  async newStore(@Body() data: StoreDto, store_id: number, user_id: number, @Res() res: Response, @Req() req: Request) {
    // const user_type = req.user
    // console.log(req.user);
    //
    // if(user_type.type != 'admin') {
    //   return res.status(403).json({
    //     error: 'sem permissão para criar uma loja'
    //   })
    // }

    console.log('no controllerr', req.user);
    const store = await this.storeService.newStore(data, store_id)
    console.log('store', store);

    if(store) {
      console.log('dentro do if');
      return res.status(201).json({
        message: "Nova loja cadastrada",
        store
      })
    }

    console.log('passou do if');
    return res.status(403).json({
      error: "Erro ao cadastrar nova loja."
    })
  }

  @Patch('update-store/:id')
  async upStore(@Body() data: StoreDto, @Param('id') store_id: string, @Res() res: Response, @Req() req: Request) {
    const store = await this.storeService.updateStore(store_id, data)
    console.log('no controller');

    if(store) {
      return res.status(200).json({
        message: "Loja atualizada com sucesso!"
      })
    }

    return res.status(403).json({
      error: "Erro ao atualizar esta loja."
    })
  }

  @Delete(':id')
  async deleteStore(@Param('id') store_id: string, @Res() res: Response, @Req() req: Request) {
    const store = await this.storeService.destroyStore(store_id)

    if(store) {
      return res.status(200).json({
        message: "Loja excluída com sucesso!"
      })
    }

    return res.status(403).json({
      error: "Não foi possível excluir esta loja."
    })

  }

}
