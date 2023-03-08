import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'api/fetchAPI';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState();
  const [error, setError] = useState('');
  const [onLoad, setOnLoad] = useState(false);
 
 
  useEffect(() => {
    setOnLoad(true);
    const fetchMovieCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setMovieCast(data);
      } catch (error) {
        setError(
            toast('The is no cast here')
        );
      }
    };
    fetchMovieCast();
    setOnLoad(false);
  }, [movieId]);

  return <>
    { onLoad && <Loader />}
    {movieCast && <CastList cast={movieCast} />}
    {error && <div>{setError}</div>}
  </>;
};

export default Cast;


