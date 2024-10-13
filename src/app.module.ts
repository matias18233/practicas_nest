import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// El @ lo convierte en el módulo principal
@Module({
  imports: [ CarsModule ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
