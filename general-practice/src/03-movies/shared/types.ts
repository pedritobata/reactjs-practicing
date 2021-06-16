import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../application/store/redux/store";
import { Movie } from '../domain/movie';


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

//UI
export type MovieCardSize = 'small' | 'medium' | 'large';

export type HomeFeedMovies = {
    topRated: Movie[];
    nowPlaying: Movie[];
    upcoming: Movie[];
}