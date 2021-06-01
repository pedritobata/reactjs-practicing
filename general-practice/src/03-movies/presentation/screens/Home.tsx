import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import { requestPopularMovies } from '../../application/store/redux/actions/movieActions';


export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPopularMovies());
    }, [dispatch]);
    
    return (
        <section>
            <Hero />
        </section>
    )
}
