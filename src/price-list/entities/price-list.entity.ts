import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class PriceList {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int')
    companyId: number;

    @Column('text')
    description: string;

    @Column('int')
    defaultCurrencyId: number;

    @Column('boolean')
    isDisabled: boolean;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    createdAt: Date;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    updatedAt: Date;

    @Column({
        type: 'timestamp',
        nullable: true
    })
    deletedAt: Date;

    @BeforeInsert()
    updateCreatedAt() {
        this.createdAt = new Date(Math.floor(Date.now() / 1000) * 1000);
    }
}
