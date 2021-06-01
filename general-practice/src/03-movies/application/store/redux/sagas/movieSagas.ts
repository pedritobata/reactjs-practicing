import { put, takeEvery, call, all } from 'redux-saga/effects';
import { Action } from '../../../../domain/action';
import { fetchPopularMovies, MOVIE_POPULAR_LIST } from '../actions/movieActions';
import MovieService from '../../../services/movieService';
import MovieFetch from '../../../../infraestructure/api/fetch/movieFetch';




function* getPopularMovies(action: Action): any {
    // TODO dependency inyection
    const movieService = yield new MovieService(new MovieFetch());
    try{
        const response = yield call(movieService.getPopularMovies);
        yield put(fetchPopularMovies(response.results))
        console.log('popularMovies', response);
    } catch(error){
        console.log('[Saga] getPopularMovies',error);
    }
}


function* watchMovies() {
    yield takeEvery(MOVIE_POPULAR_LIST, getPopularMovies);
}

export default function* rootSaga() {
    yield all([watchMovies()])
} 