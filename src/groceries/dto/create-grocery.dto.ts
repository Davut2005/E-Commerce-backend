import { IsNotEmpty, IsNumber, IsString, IsPositive, IsOptional } from 'class-validator';

export class CreateGroceryDto {

  @IsNumber()
  @IsOptional()
  id: number
  
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  imgName: string;

  @IsOptional()
  @IsString()
  imgMimeType: string;

  @IsOptional()
  imgBuffer: Buffer;

}
