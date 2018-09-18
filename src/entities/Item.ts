import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';

@Entity('items')
export class Item extends BaseEntity
{
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column({ type: 'text'})
    name: string;

    @CreateDateColumn({ type: 'timestamp'})
    created: string;
}