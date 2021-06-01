import { useState } from 'react';
import { popularMovies } from '../../../application/store/redux/selectors/movieSelectors';
import { url } from '../../../shared/constants';
import { useAppSelector } from '../../../shared/types';
import Button from '../UI/Button/Button';
import classes from './Hero.module.css';
import { HeroStyled } from './HeroStyled';


export default function Hero() {
    const movies = useAppSelector(popularMovies);
    const [heroIdx, setHeroIdx] = useState(0);

    const nextHerohandler = () => {
        setHeroIdx(prev => ++prev < movies.length ? prev : 0);
    }

    return (
        <HeroStyled url={`${url.movieDBImages}/${movies[heroIdx]?.backdrop_path}`}>
            <div className={classes.container}>
                <div className={classes.info}>
                    <h2>{movies[heroIdx]?.title}</h2>
                    <p>{movies[heroIdx]?.overview}</p>
                </div>
                <div className={classes.btnContainer}>
                    <Button text="Next" variant="outlined" clicked={nextHerohandler}/>
                    <Button text="Play" variant="primary" />
                </div>
            </div>
        </HeroStyled>
    )
}
