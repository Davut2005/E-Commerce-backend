import { Injectable } from '@nestjs/common';
import { CreateGroceryDto } from './dto/create-grocery.dto';
import { UpdateGroceryDto } from './dto/update-grocery.dto';
import { Grocery } from './entities/grocery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { buffToBase64 } from 'src/services/buffToBase64';

@Injectable()
export class GroceriesService {

  constructor (
    @InjectRepository(Grocery)
    private readonly groceryRepo: Repository<Grocery>
  ) {}

  async create(createGroceryDto: CreateGroceryDto, file? : Express.Multer.File) {
    const newGrocery = buffToBase64(createGroceryDto, file.buffer) 
    const grocery = this.groceryRepo.create(newGrocery);
    return this.groceryRepo.save(grocery);
  }

  async findAll() {
    return this.groceryRepo.find();
  }

  async findOne(id: number) {
    return this.groceryRepo.findOne({where: {id: id}});
  }

  async update(id: number, file: Express.Multer.File , updateGroceryDto: UpdateGroceryDto) {
    await this.groceryRepo.update(id, buffToBase64(updateGroceryDto, file.buffer)); 
    return this.groceryRepo.findOne( {where: {id: id}} )
  }

  async remove(id: number) {
    return await this.groceryRepo.delete(id);
  }
}
