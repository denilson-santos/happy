import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orfanage from './Orphanage';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orfanage, orfanage => orfanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: string
}