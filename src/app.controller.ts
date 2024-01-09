import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MovieService } from './app.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('byDate/:releaseDate')
  getAllMoviesByDate(@Param('releaseDate') releaseDate: string) {
    return this.movieService.getAllMoviesByDate(releaseDate);
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
    return this.movieService.getMovie(id);
  }
  
  @Post()
  createMovie(@Body() movie) {
    return this.movieService.addMovie(movie);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(id);
  }
}
