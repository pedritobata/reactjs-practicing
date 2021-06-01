import { Action } from "../../../../domain/action";
import { Movie } from "../../../../domain/movie";
import { MOVIE_POPULAR_LIST_SUCCESS } from '../actions/movieActions';

export interface MovieState {
    popular: {
        page: number,
        movies: Movie[]
    };
}

const initialState: MovieState = {
    popular: {
        page: 1,
        movies: []
    }
}

export default function movieReducer(state: MovieState = initialState, action: Action): MovieState {
    switch(action.type){
        case MOVIE_POPULAR_LIST_SUCCESS:
            return {
                ...state,
                popular: {
                    page: action.payload.page,
                    movies: action.payload.movies
                },
            }
         default:
            return state;
    }
}