import Image from 'next/image';
import Link from 'next/link';

interface IMovie {
  title: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  genres: { name: string }[];
  runtime: string;
  homepage: string;
}

const MovieDetails: React.FC<{ movie: IMovie }> = ({ movie }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      <div className='details'>
        <div className='details_img'>
          <Image
            src={movie.backdrop_path ? imagePath + movie.backdrop_path : '/placeholder.jpg'}
            alt={movie.title}
            fill
            sizes='(max-width: 425px) 100vw, (max-width: 767px) 100vw, 50vw'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='details_text'>
          <span>{movie.release_date}</span>
          <h3 className='name'>{movie.title}</h3>
          <p>{movie.overview}</p>
          {movie.genres?.[0] && (
            <span className='gel'>
              {movie.genres[0].name}: {movie.runtime} minutes
            </span>
          )}

          <p className='mel'>{movie.homepage}</p>
        </div>
      </div>
      <div className='text_end'>
        <Link href='/movies'>
          <h3>Back</h3>
        </Link>
      </div>
    </>
  );
};

export default MovieDetails;
