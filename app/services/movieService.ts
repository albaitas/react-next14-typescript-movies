import { Metadata } from 'next';

const API_KEY = '39da76472031f96ed2c1c3278bd867fc';

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
  overview: string;
  homepage: string;
  runtime: string;
  genres: { name: string }[];
}

export async function getMovie(id: string): Promise<IMovie> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Nepavyko gauti filmo informacijos');
  }
  return res.json();
}

export async function fetchMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  return res.json();
}
