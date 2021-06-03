import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from "../components/Hero/Hero";
import { requestPopularMovies, requestTopRatedMovies } from '../../application/store/redux/actions/movieActions';
import Category from '../components/Category/Category';
import { topRatedMovies } from '../../application/store/redux/selectors/movieSelectors';
import { useAppSelector } from '../../shared/types';


export default function Home() {
    const dispatch = useDispatch();
    const topRated = useAppSelector(topRatedMovies);

    useEffect(() => {
        dispatch(requestPopularMovies());
        dispatch(requestTopRatedMovies());
    }, [dispatch]);
    
    return (
        <section>
            <Hero />
            <Category title="Top rated" movies={topRated}/>
        </section>
    )
}
