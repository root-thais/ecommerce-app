import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StoreDto } from '../dto/store.dto';
import { Request } from 'express';
import { User } from '@prisma/client';

@Injectable()
export class StoreService {
  private userId: any;
  constructor(private prisma: PrismaService) {}

  async getStore(store_id: string) {
    try {
      return this.prisma.store.findFirstOrThrow({
        where: {
          store_id: parseInt(store_id)
        }
      })

    } catch (err) {
      return null
    }
  }

  async listStore() {
    try {
      return this.prisma.store.findMany()

    } catch (err) {
      return null
    }
  }

  async newStore(data: StoreDto, store_id: number) {
    try {
      console.log('chegou no service');
      const find_store = await this.prisma.store.findFirst({
        where: {
          store_id: store_id,
          name: data.name,
        },
      });
      console.log('find store', find_store);
      if (!find_store) {
        console.log( 'dentro do if');
         return this.prisma.store.create({
           data: {
             name: data.name,
             email: data.email,
             status: 'active',
             facebook_url: data.facebook_url,
             x_url: data.x_url,
             slogan: data.slogan,
             instagram_url: data.instagram_url,
             created_by: data.created_by
           }
         })
      }

      console.log('passou do if no service');
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async updateStore(store_id: string, data: StoreDto) {
    try {
      console.log('no service');
      const find_store = await this.prisma.store.findFirst({
        where: {
          store_id: parseInt(store_id)
        }
      })

      if(find_store) {
        return this.prisma.store.update({
          where: {
            store_id: parseInt(store_id)
          },
          data: {
            name: data.name,
            email: data.email,
            status: data.status,
            facebook_url: data.facebook_url,
            x_url: data.x_url,
            slogan: data.slogan,
            instagram_url: data.instagram_url
          }
        })
      }

    } catch (err) {
      console.log('o error', err);
      return null
    }
  }

  async destroyStore(store_id: string) {
    try {
      const find_store = await this.prisma.store.findFirst({
        where: {
          store_id: parseInt(store_id)
        }
      })

      if(find_store) {
        return this.prisma.store.delete({
          where: {
            store_id: parseInt(store_id)
          }
        })
      }

    } catch (err) {
      return null
    }
  }

}
