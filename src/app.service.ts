import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private readonly movies: Repository<Movie>,
  ) { }

  getAllMoviesByDate(releaseDate: string){
    const date = new Date(releaseDate);
    return this.movies.find({
      where: {
        releaseDate: releaseDate,
      },
    });
  }

  getMovie(movieId: string) {
    return this.movies.findOne({ where: { id: parseInt(movieId) } });
  }

  addMovie(movie: Movie){
    return this.movies.save(movie);
  }

  async deleteMovie(movieId: string) {
    return this.movies.delete(movieId);
  }
}
