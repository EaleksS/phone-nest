import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Phone' })
export class PhoneEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  phone: string;

  @Column()
  comment: string;
}
