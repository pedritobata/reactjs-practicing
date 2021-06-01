import { Movie } from './movie';

export default interface MovieRepository {

    getPopular(page: number): Promise<Movie[]>;

}