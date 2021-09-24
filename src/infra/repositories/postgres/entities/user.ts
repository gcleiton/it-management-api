import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export class PostgresUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  username!: string

  @Column({ name: 'first_name' })
  firstName!: string

  @Column({ name: 'last_name' })
  lastName!: string

  @Column()
  password!: string

  @Column({ unique: true })
  email!: string

  @Column({ nullable: true })
  phone?: string
}
