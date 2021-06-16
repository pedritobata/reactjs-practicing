import { AppState } from "../../../../shared/types";
import { Movie } from '../../../../domain/movie';

export const popularMovies = (state: AppState): Movie[] => state.movie.popular.movies;

export const topRatedMovies = (state: AppState): Movie[] => state.movie.topRated.movies;

export const latestMovies = (state: AppState): Movie[] => state.movie.latest.movies;

export const upcomingMovies = (state: AppState): Movie[] => state.movie.upcoming.movies;

export const nowPlayingMovies = (state: AppState): Movie[] => state.movie.nowPlaying.movies;

export const loadingFlag = (state: AppState): boolean => state.movie.loading;