import { Action } from '../../../../domain/action';
import { Movie } from '../../../../domain/movie';

export const MOVIE_POPULAR_LIST = 'MOVIE_POPULAR_LIST';
export const MOVIE_POPULAR_LIST_SUCCESS = 'MOVIE_POPULAR_LIST_SUCCESS';
export const MOVIE_POPULAR_LIST_FAIL = 'MOVIE_POPULAR_LIST_FAIL';

export const requestPopularMovies = (page: number = 1): Action => {
    return {
        type: MOVIE_POPULAR_LIST,
        payload: page
    }
}

export const fetchPopularMovies = (movies: Movie[], page: number = 1): Action => {
    return {
        type: MOVIE_POPULAR_LIST_SUCCESS,
        payload: {page, movies}
    }
}