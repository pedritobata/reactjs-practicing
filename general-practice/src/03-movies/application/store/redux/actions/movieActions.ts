import { Action } from '../../../../domain/action';
import { Movie } from '../../../../domain/movie';

export const MOVIE_POPULAR_LIST = 'MOVIE_POPULAR_LIST';
export const MOVIE_POPULAR_LIST_SUCCESS = 'MOVIE_POPULAR_LIST_SUCCESS';
export const MOVIE_POPULAR_LIST_FAIL = 'MOVIE_POPULAR_LIST_FAIL';

export const MOVIE_TOP_RATED_LIST = 'MOVIE_TOP_RATED_LIST';
export const MOVIE_TOP_RATED_LIST_SUCCESS = 'MOVIE_TOP_RATED_LIST_SUCCESS';
export const MOVIE_TOP_RATED_LIST_FAIL = 'MOVIE_TOP_RATED_LIST_FAIL';

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

export const requestTopRatedMovies = (page: number = 1): Action => {
    return {
        type: MOVIE_TOP_RATED_LIST,
        payload: page
    }
}

export const fetchTopRatedMovies = (movies: Movie[], page: number = 1): Action => {
    return {
        type: MOVIE_TOP_RATED_LIST_SUCCESS,
        payload: {page, movies}
    }
}