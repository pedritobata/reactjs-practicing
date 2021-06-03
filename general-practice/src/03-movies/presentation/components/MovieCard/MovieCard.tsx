import classes from "./MovieCard.module.css";
import { url } from "../../../shared/constants";
import { MovieCardSize } from '../../../shared/types';
import React  from 'react';

type Props = {
    title: string;
    size: MovieCardSize;
    image: string;
}

const MovieCard = React.forwardRef(({title, size, image}: Props, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <article ref={ref} className={`${classes.card} ${classes[size]}`}>
        <div className={classes.backdrop}></div>
      <figure className={classes.imageContainer}>
        <img
          className={classes.image}
          src={`${url.movieDBImages}/${image}`}
          alt={title}
        />
        <figcaption className={classes.title}>{title}</figcaption>
      </figure>
    </article>
  );
});

export default MovieCard;
