import MovieCard from "../MovieCard/MovieCard";
import classes from "./Category.module.css";
import { Movie } from "../../../domain/movie";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  movies: Movie[];
};

const Category = ({ title, movies }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const cards = cardRef.current;
      const cardWidth = cards?.children[0].getClientRects()[0].width;
      
  }, []);

  return (
    <section className={classes.category}>
      <h2 className={classes.title}>{title}</h2>
      <div ref={cardRef} className={classes.movies}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            size="small"
            image={movie.backdrop_path}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
