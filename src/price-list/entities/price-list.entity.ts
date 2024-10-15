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

    @Column('timestamp')
    createdAt: Timestamp;

    @Column('timestamp')
    updatedAt: Timestamp;

    @Column('timestamp')
    deletedAt: Timestamp;

}
