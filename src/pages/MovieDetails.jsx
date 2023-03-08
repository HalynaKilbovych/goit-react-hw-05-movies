import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet} from 'react-router-dom';
import { fetchMovieDetails } from 'api/fetchAPI';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { BackButton } from 'components/MovieInfo/MovieInfo.styled';
import { BallTriangle } from 'react-loader-spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <BallTriangle />;

    return (
        <main style={{ padding: '0 60px 40px 60px' }}>
          {movie && (
            <>
            <BackButton to={backLink}>Go back</BackButton>
            <MovieInfo movie={movie} backPath={backLink} />
            </>
          )}
    
          <Suspense fallback={<BallTriangle />}>
            <Outlet />
          </Suspense>
        </main>
      );

}
export default MovieDetails;
