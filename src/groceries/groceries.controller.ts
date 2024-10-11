import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { GroceriesService } from './groceries.service';
import { CreateGroceryDto } from './dto/create-grocery.dto';
import { UpdateGroceryDto } from './dto/update-grocery.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('groceries')
export class GroceriesController {
  constructor(private readonly groceriesService: GroceriesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(
    @Body() createGroceryDto: CreateGroceryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.groceriesService.create(createGroceryDto,file);
  }

  @Get()
  findAll() {
    return this.groceriesService.findAll(); 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groceriesService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('img'))
  update (
    @Param('id') id: string, 
    @Body() updateGroceryDto: UpdateGroceryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.groceriesService.update(+id, file ,updateGroceryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groceriesService.remove(+id);
  }
}
