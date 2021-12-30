import { put, takeEvery, call, all, CallEffect } from "redux-saga/effects";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  MOVIES_HOME_FEED,
  MOVIE_POPULAR_LIST,
  MOVIE_POPULAR_LIST_FAIL,
  MOVIE_TOP_RATED_LIST,
  MOVIE_TOP_RATED_LIST_FAIL,
} from "../actions/movieActions";
import MovieService from "../../../services/movieService";
import MovieFetch from "../../../../infraestructure/api/fetch/movieFetch";
import { fetchHomeFeed, MOVIES_HOME_FEED_FAIL } from '../actions/movieActions';
import { HomeFeedMovies } from '../../../../shared/types';

// TODO dependency inyection
export const movieService = new MovieService(new MovieFetch());

export function* getPopularMovies(): any {
  try {
    const response = yield call(movieService.getPopularMovies);
    yield put(fetchPopularMovies(response));
  } catch (error) {
    yield put({ type: MOVIE_POPULAR_LIST_FAIL, error });
    console.log("[Saga] getPopularMovies", error);
  }
}

export function* getTopRatedMovies(): any {
  try {
    const response = yield call(movieService.getTopRatedMovies);
    yield put(fetchTopRatedMovies(response));
  } catch (error) {
    yield put({ type: MOVIE_TOP_RATED_LIST_FAIL, error });
    console.log("[Saga] getTopRatedMovies", error);
  }
}

export function* getHomeFeed(): any {
  try {
    const feedResponse = yield call(movieService.getHomeFeed);
    const homeFeed: HomeFeedMovies = {
      topRated: feedResponse[0],
      nowPlaying: feedResponse[1],
      upcoming: feedResponse[2],
    }
    yield put(fetchHomeFeed(homeFeed));
  } catch(error){
    yield put({type: MOVIES_HOME_FEED_FAIL, error})
  }
}

function* watchMovies() {
  yield takeEvery(MOVIE_POPULAR_LIST, getPopularMovies);
  yield takeEvery(MOVIE_TOP_RATED_LIST, getTopRatedMovies);
  yield takeEvery(MOVIES_HOME_FEED, getHomeFeed);
}


export default function* rootSaga() {
  yield all([watchMovies()]);
}
