import { put, takeEvery, call, all } from "redux-saga/effects";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  MOVIE_POPULAR_LIST,
  MOVIE_POPULAR_LIST_FAIL,
  MOVIE_TOP_RATED_LIST,
  MOVIE_TOP_RATED_LIST_FAIL,
} from "../actions/movieActions";
import MovieService from "../../../services/movieService";
import MovieFetch from "../../../../infraestructure/api/fetch/movieFetch";

// TODO dependency inyection
export const movieService = new MovieService(new MovieFetch());

export function* getPopularMovies(): any {
  try {
    const response = yield call(movieService.getPopularMovies);
    yield put(fetchPopularMovies(response.results));
  } catch (error) {
    yield put({ type: MOVIE_POPULAR_LIST_FAIL, error });
    console.log("[Saga] getPopularMovies", error);
  }
}

export function* getTopRatedMovies(): any {
  try {
    const response = yield call(movieService.getTopRatedMovies);
    yield put(fetchTopRatedMovies(response.results));
  } catch (error) {
    yield put({ type: MOVIE_TOP_RATED_LIST_FAIL, error });
    console.log("[Saga] getTopRatedMovies", error);
  }
}

function* watchMovies() {
  yield takeEvery(MOVIE_POPULAR_LIST, getPopularMovies);
  yield takeEvery(MOVIE_TOP_RATED_LIST, getTopRatedMovies);
}

export default function* rootSaga() {
  yield all([watchMovies()]);
}
