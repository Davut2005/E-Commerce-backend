import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('img'))
    create(
        @Body() createProductDto: CreateProductDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.productsService.create(createProductDto, file);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('img'))
    update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.productsService.update(+id, file, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
