import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

    @Column('timestamp', {
        nullable: true
    })
    createdAt: Timestamp;

    @Column('timestamp', {
        nullable: true
    })
    updatedAt: Timestamp;

    @Column('timestamp', {
        nullable: true
    })
    deletedAt: Timestamp;

}
