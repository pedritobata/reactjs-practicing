import { ResponseMovieDB } from './movie';

export default interface MovieRepository {

    getPopular(page: number): Promise<ResponseMovieDB>;

    getTopRated(page: number): Promise<ResponseMovieDB>;

    getUpcoming(page: number): Promise<ResponseMovieDB>;

    getLatest(page: number): Promise<ResponseMovieDB>;

    getNowPlaying(page: number): Promise<ResponseMovieDB>;

}