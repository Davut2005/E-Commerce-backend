import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity ()
export class Grocery {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true})
    name: string;

    @Column({ nullable: true })
    imgName: string; 

    @Column({ nullable: true })
    imgBuffer: string;

    @Column({ nullable: true})
    imgMimeType: string;
  
    @Column('decimal')
    price: number;
} 
