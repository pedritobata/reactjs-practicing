import { put, takeEvery, call, all } from 'redux-saga/effects';
import { fetchPopularMovies, MOVIE_POPULAR_LIST, MOVIE_POPULAR_LIST_FAIL } from '../actions/movieActions';
import MovieService from '../../../services/movieService';
import MovieFetch from '../../../../infraestructure/api/fetch/movieFetch';


// TODO dependency inyection
export const movieService = new MovieService(new MovieFetch());

export function* getPopularMovies(): any {
    
    try{
        const response = yield call(movieService.getPopularMovies);
        yield put(fetchPopularMovies(response.results))
        console.log('popularMovies', response);
    } catch(error){
        yield put({type: MOVIE_POPULAR_LIST_FAIL, error})
        console.log('[Saga] getPopularMovies',error);
    }
}


function* watchMovies() {
    yield takeEvery(MOVIE_POPULAR_LIST, getPopularMovies);
}

export default function* rootSaga() {
    yield all([watchMovies()])
} 