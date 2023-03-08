import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/Form/Form';
import { fetchSearchMovies } from 'api/fetchAPI';
import { BallTriangle } from 'react-loader-spinner'


const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) return;
    setOnLoad(true);
    fetchSearchMovies(searchValue).then(response => {
      setMovies([...response]);
      setOnLoad(false);
    });
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {onLoad && <BallTriangle />}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Movies;