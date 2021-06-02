import { getPopularMovies, movieService } from './movieSagas';
import { call, put } from 'redux-saga/effects';
import { fetchPopularMovies, MOVIE_POPULAR_LIST_FAIL } from '../actions/movieActions';

describe('Test movieSagas', () => {
    it('Should success getPopularMovies saga', () => {
        const gen = getPopularMovies();
        expect(gen.next().value).toEqual(call(movieService.getPopularMovies));
        expect(gen.next(call(movieService.getPopularMovies)).value)
        .toEqual(put(fetchPopularMovies(undefined)));
    })

    it('Should fail getPopularMovies saga', () => {
        const gen = getPopularMovies();
        gen.next();
        const error = {};
        expect(gen.throw(error).value).toEqual(put({type: MOVIE_POPULAR_LIST_FAIL, error: {}}));
    })
    
});