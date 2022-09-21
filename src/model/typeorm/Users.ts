import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })

    id: number

    @Column({
        name: 'user_name',
        nullable: false,
        default: '',
    })
    username: string
    @Column()
    email: string
    @Column()
    password: string
}