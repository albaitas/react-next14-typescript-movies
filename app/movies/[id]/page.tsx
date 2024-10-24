import { getMovie } from '../../services/movieService';
import MovieDetails from '../../components/MovieDetails';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
    description: movie.overview
  };
}

const MovieDetailsPage = async ({ params }: { params: { id: string } }) => {
  const movie = await getMovie(params.id);

  return <MovieDetails movie={movie} />;
};

export default MovieDetailsPage;
