import MovieRepository from '../../domain/movieRepository';
import { Movie } from '../../domain/movie';

export default class MovieService {
    private movieRepository: MovieRepository;

    constructor(movieRepository: MovieRepository) {
        this.movieRepository = movieRepository;
    }

    public getPopularMovies = async (page: number = 1): Promise<Movie[]> => {
        const response = await this.movieRepository.getPopular(page);
        return response.results;
    }

    public getTopRatedMovies = async (page: number = 1): Promise<Movie[]> => {
        const response = await this.movieRepository.getTopRated(page);
        return response.results;
    }

    public getHomeFeed = async (): Promise<Array<Movie[]>> => {
        const response = await Promise.all([ 
            this.movieRepository.getTopRated(1),
            this.movieRepository.getNowPlaying(1),
            this.movieRepository.getUpcoming(1)
        ]);
        return [response[0].results, response[1].results, response[2].results];
    }


}