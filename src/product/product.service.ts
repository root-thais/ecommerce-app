import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  // async createNewProduct(data: ProductDto, product_id: string) {
  //   try {
  //     const find_product = await this.prismaService.product.findFirst({
  //       where: {
  //         product_id: parseInt(product_id)
  //       }
  //     })
  //
  //     if(!find_product) {
  //       return this.prismaService.product.create({
  //         data: {
  //           name: data.name,
  //           brand: data.brand,
  //           category: data.category,
  //           qtd_product: data.qtd_product,
  //           characteristics: data.characteristics,
  //           description: data.description,
  //           image: data.image,
  //           price: data.price,
  //           product_review: data.product_review
  //         }
  //       })
  //     }
  //
  //   } catch (err) {
  //     return null
  //   }
  // }
}
