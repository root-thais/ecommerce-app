import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(readonly prisma : PrismaService) {}

  async findUser(email: string): Promise<UserDto> {
    try {
      return this.prisma.user.findFirstOrThrow({
        where: {
          email: email
        }
      })

    } catch (err) {
     return null
    }
  }

  async getUser(user_id: string):Promise<UserDto> {
    try {
      console.log('no service de findFirst');
      return this.prisma.user.findFirst({
        where: {
          user_id: parseInt(user_id)
        }
      });

    } catch (err) {
      console.log(err)
      return null;
    }
  }

  async getUsers() {
    try {
      return this.prisma.user.findMany()

    } catch (err) {
      return null
    }
  }

  async getUsersAdmin() {
    try {
      console.log('chegou no service');
      return this.prisma.user.findMany({
        where: {
          type: 'admin'
        }
      })

    } catch (err) {
      return null
    }
  }

  async getUserSeller() {
    try {
      return this.prisma.user.findMany({
        where: {
          type: 'seller'
        }
      })

    } catch (err) {
      return null
    }
  }

  async getUsersClient() {
    try {
      return this.prisma.user.findMany({
        where: {
          type: 'client'
        }
      })

    } catch (err) {
      return null
    }
  }

  async createUserAdmin(data: UserDto, user_id: number) {
    try {
      const find_user = await this.prisma.user.findFirst({
        where: {
          user_id: user_id,
          email: data.email
        }
      })

      console.log('antes do if');
      if(!find_user) {
        console.log('no if');
        return this.prisma.user.create({
          data: {
            name: data.name,
            email: data.email,
            type: 'admin',
            gender: data.gender,
            password: bcrypt.hashSync(data.password, 10),
            phone_number: data.phone_number,
            document_cpf: data.document_cpf,
            date_of_birth: data.date_of_birth
          }
        })
      }

    } catch (err) {
      console.log(err);
      return null
    }
  }

  async createUserClient(data: UserDto, user_id: number) {
    try {
      const find_user = await this.prisma.user.findFirst({
        where: {
          user_id: user_id,
          email: data.email
        }
      })

      if(!find_user) {
        console.log('dentro do if');
        return this.prisma.user.create({
          data: {
            name: data.name,
            email: data.email,
            type: 'client',
            date_of_birth: data.date_of_birth,
            document_cpf: data.document_cpf,
            phone_number: data.phone_number,
            gender: data.gender,
            password: bcrypt.hashSync(data.password, 10)
          }
        })
      }

    } catch (err) {
      console.log(err);
      return null
    }
  }

  async createUserSeller(data: UserDto, user_id: number) {
    try {
      const find_user = await this.prisma.user.findFirst({
        where: {
          user_id: user_id,
          email: data.email
        }
      })
      console.log('antes do if', find_user);
      if(!find_user){
        console.log('Dentro do if');
        return this.prisma.user.create({
          data: {
            name: data.name,
            email: data.email,
            type: 'seller',
            gender: data.gender,
            phone_number: data.phone_number,
            document_cpf: data.document_cpf,
            date_of_birth: data.date_of_birth,
            password: bcrypt.hashSync(data.password, 10)
          }
        })
      }
      console.log('dentro do if');
    } catch (err) {
      console.log(err);
      return null
    }
  }

  async changeUser(data: UserDto, user_id: string) {
    try {
      const find_admin = await this.prisma.user.findFirstOrThrow({
        where: {
          user_id: parseInt(user_id)
        }
      })

      if(find_admin) {
        return this.prisma.user.update({
          where: {
            user_id: parseInt(user_id)
          },
          data: {
            name: data.name,
            email: data.email,
            gender: data.gender,
            phone_number: data.phone_number,
            date_of_birth: data.date_of_birth,
            password: bcrypt.hashSync(data.password, 10)
          }
        })
      }

    } catch (err) {
      return null
    }
  }

  async destroyUser(user_id: string) {
    try {
      const find_user =  await this.prisma.user.findFirstOrThrow({
        where: {
          user_id: parseInt(user_id)
        }
      })

      if(find_user) {
        return this.prisma.user.delete({
          where: {
            user_id: parseInt(user_id)
          }
        })
      }

    } catch (err) {
      return null
    }
  }

}
