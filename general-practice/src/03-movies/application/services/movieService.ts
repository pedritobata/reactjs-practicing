import MovieRepository from '../../domain/movieRepository';
import { Movie } from '../../domain/movie';

export default class MovieService {
    private movieRepository: MovieRepository;

    constructor(movieRepository: MovieRepository) {
        this.movieRepository = movieRepository;
    }

    public getPopularMovies = async (page: number = 1): Promise<Movie[]> => {
        return await this.movieRepository.getPopular(page);
    }
}