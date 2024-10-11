import { Grocery } from "src/groceries/entities/grocery.entity"
import { CreateGroceryDto } from '../groceries/dto/create-grocery.dto';
import { UpdateGroceryDto } from "src/groceries/dto/update-grocery.dto";

/*export type ElemWithBuff = {
    id: number;
  
    name: string;

    imgName: string;

    imgBuffer: Buffer;

    imgMimeType: string;
  
    price: number;
}*/

/*export const  listOfBufferToBase64 = (elems: ElemWithBuff[]) : Grocery[] => {
    const newElems = elems.map(  (elem : ElemWithBuff) => {
      const buffString = elem.imgBuffer ? elem.imgBuffer.toString('base64') : '' ;
      const newElement = {
        id: elem.id, 
        name: elem.name,
        price: elem.price,
        imgName: elem.imgName,
        imgMimeType: elem.imgMimeType,
        imgBuffer: buffString || '',
      }
      return newElement        
      }
    )

    return newElems;   
}*/


export const buffToBase64 = (createGroceryDto: CreateGroceryDto | UpdateGroceryDto,  imgBuffer : Buffer ) : Grocery => {

    const buffString = imgBuffer ? imgBuffer.toString('base64') : '';
    console.log(buffString);
    
    const newGrocery : Grocery = {
        id: createGroceryDto.id, 
        name: createGroceryDto.name,
        price: createGroceryDto.price,
        imgName: createGroceryDto.imgName,
        imgMimeType: createGroceryDto.imgMimeType,
        imgBuffer: buffString
    }
    return newGrocery;
};