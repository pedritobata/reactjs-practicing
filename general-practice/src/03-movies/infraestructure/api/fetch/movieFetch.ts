import MovieRepository from '../../../domain/movieRepository';
import { Movie } from '../../../domain/movie';

export default class MovieFetch implements MovieRepository {
    private static baseUrl = 'https://api.themoviedb.org/3/movie/popular';
    private static apiKey = process.env.REACT_APP_MOVIES_API_KEY;

    public async getPopular(page: number): Promise<Movie[]> {
        let popularMovies: Movie[] = [];
        const url = new URL(MovieFetch.baseUrl);
        url.searchParams.set('api_key', MovieFetch.apiKey!);
        url.searchParams.set('language','en-US');
        url.searchParams.set('page',page.toString());
        console.log('URL', url.href)
        console.log('process.env', process.env.NODE_ENV)
        const response = await fetch(url.toString());
        if(!response.ok){
            throw new Error('Could not fetch popular movies.');
        }
        popularMovies = await response.json(); 
        
        return popularMovies;
    }

}