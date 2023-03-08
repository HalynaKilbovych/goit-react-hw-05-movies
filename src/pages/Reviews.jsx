import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'api/fetchAPI';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setMovieReviews(data);
    };
    fetchReviews();
  }, [movieId]);

  return <>{movieReviews && 
  <ReviewsList reviews={movieReviews} />}</>;
};
export default Reviews;
