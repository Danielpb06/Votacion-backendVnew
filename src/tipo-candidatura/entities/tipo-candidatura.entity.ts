import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity('tipo_candidatura')

export class TipoCandidatura {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_candidatura: number;

  @Column({type: 'varchar', length: 100, nullable: true })
  descripcion: string;

}