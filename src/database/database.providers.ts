import { Movie } from 'src/movie.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'test.sql',
        entities: [__dirname + '/../**/*.entity{.ts,.js}', Movie],
        synchronize: true,
        logging: ['query'],
      });

      return dataSource.initialize();
    },
  },
];
