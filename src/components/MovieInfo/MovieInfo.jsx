import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'api/fetchAPI';
import { BallTriangle } from 'react-loader-spinner'
import { Container, Content, Link } from './MovieInfo.styled';
import defaultPicture from '../../images/no-poster.jpg';
import PropTypes from 'prop-types';

const MovieInfo = ({ movie, backPath}) => {
    const [movieInfo, setMovieInfo] = useState(null);
  
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const data = await fetchMovieDetails(movie.id);
          setMovieInfo(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMovie();
    }, [movie.id]);
  

  if (!movieInfo) {
    return <BallTriangle/>;
  }

  const { poster_path, title, vote_average, genres, overview } = movieInfo;

  return (
    <Container>
      <img
        src={
        poster_path !== null
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultPicture
            }
        alt={title}
        />
    <Content>
        <h1>{title}</h1>
        <p>Rating: {vote_average}</p>
        <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
        <p>{overview}</p>
        <Link to="cast" state={{ from: backPath }}>
            Cast
        </Link>
        <Link to="reviews" state={{ from: backPath }}>
            Reviews
        </Link>
    </Content>

    </Container>
  );
};

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        vote_average: PropTypes.number,
        genres: PropTypes.array,
        overview: PropTypes.string,
    }).isRequired,
    backPath: PropTypes.object.isRequired,
  };

export default MovieInfo;
