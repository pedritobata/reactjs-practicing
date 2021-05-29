import Button from '../UI/Button/Button';
import classes from './Hero.module.css';
import { HeroStyled } from './HeroStyled';

type Props = {
    imageUrl: string;
}

export default function Hero({imageUrl}: Props) {
    return (
        <HeroStyled url={imageUrl}>
            <div className={classes.container}>
                <div className={classes.info}>
                    <h2>Movie Title</h2>
                    <p>Descripcion</p>
                </div>
                <div className={classes.btnContainer}>
                    <Button text="Next" variant="outlined"/>
                    <Button text="Play" variant="primary" />
                </div>
            </div>
        </HeroStyled>
    )
}
