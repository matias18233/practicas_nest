import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreatePriceListDto } from './dto/create-price-list.dto';
import { UpdatePriceListDto } from './dto/update-price-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceList } from './entities/price-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PriceListService {

  private readonly logger = new Logger('PriceListService');

  constructor(
    @InjectRepository(PriceList)
    private readonly priceListRepository: Repository<PriceList>,
  ) { }

  async create(createPriceListDto: CreatePriceListDto) {
    try {
      const priceList = this.priceListRepository.create(createPriceListDto);
      await this.priceListRepository.save(priceList);

      return priceList;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return `This action returns all priceList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceList`;
  }

  update(id: number, updatePriceListDto: UpdatePriceListDto) {
    return `This action updates a #${id} priceList`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceList`;
  }
  
  private handleExceptions( error: any ) {
    if ( error === '22505' ) {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }

}
