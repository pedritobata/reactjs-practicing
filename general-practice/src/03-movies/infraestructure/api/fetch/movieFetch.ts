import MovieRepository from "../../../domain/movieRepository";
import { ResponseMovieDB } from '../../../domain/movie';

export default class MovieFetch implements MovieRepository {
  private static baseUrl = "https://api.themoviedb.org/3/movie";
  private static apiKey = process.env.REACT_APP_MOVIES_API_KEY;

  public async getPopular(page: number): Promise<ResponseMovieDB> {
    return this.getMoviesByCategory("/popular", page);
  }

  public async getTopRated(page: number): Promise<ResponseMovieDB> {
    return this.getMoviesByCategory("/top_rated", page);
  }

  public async getUpcoming(page: number): Promise<ResponseMovieDB> {
    return this.getMoviesByCategory("/upcoming", page);
  }

  public async getLatest(page: number): Promise<ResponseMovieDB> {
      return this.getMoviesByCategory('/latest', page);
  }

  public async getNowPlaying(page: number): Promise<ResponseMovieDB> {
      return this.getMoviesByCategory('/now_playing', page);
  }

  private async getMoviesByCategory(
    category: string,
    page: number
  ): Promise<ResponseMovieDB> {
    const url = new URL(MovieFetch.baseUrl + category);
    url.searchParams.set("api_key", MovieFetch.apiKey!);
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", page.toString());
    const response = await fetch(url.toString());
    //console.log('get movies', url, response);
    if (!response.ok) {
      throw new Error(`Could not fetch ${category} movies`);
    }
    return await response.json();
  }
}
