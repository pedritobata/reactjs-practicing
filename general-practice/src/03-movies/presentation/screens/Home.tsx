import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import {
  requestPopularMovies,
  requestHomeFeed,
} from "../../application/store/redux/actions/movieActions";
import Category from "../components/Category/Category";
import {
  topRatedMovies,
  upcomingMovies,
  nowPlayingMovies,
  loadingFlag,
} from "../../application/store/redux/selectors/movieSelectors";
import { useAppSelector } from "../../shared/types";

export default function Home() {
  const dispatch = useDispatch();
  const topRated = useAppSelector(topRatedMovies);
  const nowPlaying = useAppSelector(nowPlayingMovies);
  const upcoming = useAppSelector(upcomingMovies);
  const loading = useAppSelector(loadingFlag);

  useEffect(() => {
    dispatch(requestPopularMovies());
    dispatch(requestHomeFeed());
  }, [dispatch]);

  return (
    <section>
      <Hero />
      {loading ? <h3>Loading...</h3> :
        <>
          <Category title="Top rated" movies={topRated} />
          <Category title="Now Playing" movies={nowPlaying} />
          <Category title="Upcoming" movies={upcoming} />
        </>
      }
    </section>
  );
}
