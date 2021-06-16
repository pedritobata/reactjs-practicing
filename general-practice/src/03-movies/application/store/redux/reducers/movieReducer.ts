import { Action } from "../../../../domain/action";
import { Movie } from "../../../../domain/movie";
import {
  MOVIE_POPULAR_LIST_SUCCESS,
  MOVIE_TOP_RATED_LIST_SUCCESS,
  MOVIES_HOME_FEED_SUCCESS,
  MOVIES_HOME_FEED,
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
  upcoming: {
    page: number;
    movies: Movie[];
  };
  nowPlaying: {
    page: number;
    movies: Movie[];
  };
  latest: {
    page: number;
    movies: Movie[];
  };
  loading: boolean;
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
  upcoming: {
    page: 1,
    movies: [],
  },
  nowPlaying: {
    page: 1,
    movies: [],
  },
  latest: {
    page: 1,
    movies: [],
  },
  loading: false
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
    case MOVIES_HOME_FEED:
        return {
          ...state,
          topRated: {
            page: 1,
            movies: [],
          },
          latest: {
            page: 1,
            movies: [],
          },
          upcoming: {
            page: 1,
            movies: [],
          },
          nowPlaying: {
            page: 1,
            movies: [],
          },
          loading: true
        };
    case MOVIES_HOME_FEED_SUCCESS:
        return {
          ...state,
          topRated: {
            page: 1,
            movies: action.payload.topRated,
          },
          nowPlaying: {
            page: 1,
            movies: action.payload.nowPlaying,
          },
          upcoming: {
            page: 1,
            movies: action.payload.upcoming,
          },
          loading: false
        };

    default:
      return state;
  }
}
