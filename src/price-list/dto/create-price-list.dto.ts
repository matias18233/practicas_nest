import { Timestamp } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePriceListDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id: number;

    @IsNumber()
    @IsPositive()
    companyId: number;

    @IsString()
    @MinLength(3)
    description: string;

    @IsNumber()
    defaultCurrencyId: number;

    @IsBoolean()
    isDisabled: boolean;

    @IsOptional()
    createdAt?: Timestamp;

    @IsOptional()
    updatedAt?: Timestamp;

    @IsOptional()
    deletedAt?: Timestamp;
}
