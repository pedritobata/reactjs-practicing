import { Action } from "../../../../domain/action";
import { Movie } from "../../../../domain/movie";
import {
  MOVIE_POPULAR_LIST_SUCCESS,
  MOVIE_TOP_RATED_LIST_SUCCESS,
} from "../actions/movieActions";

export interface MovieState {
  popular: {
    page: number;
    movies: Movie[];
  };
  topRated: {
    page: number;
    movies: Movie[];
  };
}

const initialState: MovieState = {
  popular: {
    page: 1,
    movies: [],
  },
  topRated: {
    page: 1,
    movies: [],
  },
};

export default function movieReducer(
  state: MovieState = initialState,
  action: Action
): MovieState {
  switch (action.type) {
    case MOVIE_POPULAR_LIST_SUCCESS:
      return {
        ...state,
        popular: {
          page: action.payload.page,
          movies: action.payload.movies,
        },
      };
    case MOVIE_TOP_RATED_LIST_SUCCESS:
      return {
        ...state,
        topRated: {
          page: action.payload.page,
          movies: action.payload.movies,
        },
      };

    default:
      return state;
  }
}
