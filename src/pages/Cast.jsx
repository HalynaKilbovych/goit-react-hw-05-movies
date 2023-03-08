import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'api/fetchAPI';
import { CastList } from 'components/Cast/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const data = await fetchMovieCredits(movieId);
      setMovieCast(data);
    };
    fetchMovieCast();
  }, [movieId]);

  return <>{movieCast && <CastList cast={movieCast} />}</>;
};

export default Cast;