import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './app.controller';
import { MovieService } from './app.service';

describe('AppController', () => {
  let appController: MovieController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();

    appController = app.get<MovieController>(MovieService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getMovie('1'));
    });
  });
});
