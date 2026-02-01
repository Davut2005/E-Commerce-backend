import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { buffToBase64 } from 'src/services/buffToBase64';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>
    ) { }

    async create(createProductDto: CreateProductDto, file?: Express.Multer.File) {
        const newProduct = buffToBase64(createProductDto, file.buffer)
        const product = this.productRepo.create(newProduct);
        return this.productRepo.save(product);
    }

    async findAll() {
        return this.productRepo.find();
    }

    async findOne(id: number) {
        return this.productRepo.findOne({ where: { id: id } });
    }

    async update(id: number, file: Express.Multer.File, updateProductDto: UpdateProductDto) {
        await this.productRepo.update(id, buffToBase64(updateProductDto, file.buffer));
        return this.productRepo.findOne({ where: { id: id } })
    }

    async remove(id: number) {
        return await this.productRepo.delete(id);
    }
}
