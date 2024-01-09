import { Module } from '@nestjs/common';
import { MovieController } from './app.controller';
import { MovieService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { movieProviders } from './app.provider';

@Module({
  controllers: [MovieController],
  providers: [...movieProviders ,MovieService],
  imports: [DatabaseModule],
})
export class MovieModule {}
