import { getPopularMovies, movieService, getHomeFeed } from './movieSagas';
import { call, put } from 'redux-saga/effects';
import { fetchPopularMovies, MOVIE_POPULAR_LIST_FAIL, fetchHomeFeed } from '../actions/movieActions';
import { HomeFeedMovies } from '../../../../shared/types';

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

    it('Should fetch homeFeed movies successfuly', () => {
        const gen = getHomeFeed();
        expect(gen.next().value).toEqual(call(movieService.getHomeFeed));
        const homeFeed: HomeFeedMovies = {
            nowPlaying: undefined,
            topRated: undefined,
            upcoming: undefined
        }
        expect(gen.next(call(movieService.getHomeFeed)).value)
        .toEqual(put(fetchHomeFeed(homeFeed)));
    })
    
});