import { AppState } from "../../../../shared/types";
import { Movie } from '../../../../domain/movie';

export const popularMovies = (state: AppState): Movie[] => state.movie.popular.movies;