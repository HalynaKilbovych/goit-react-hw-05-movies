import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "api/fetchAPI";
import { BallTriangle } from 'react-loader-spinner'
import { MoviesList } from "components/MovieList/MovieList";


const TrendingMovies = () => {

    const [trendingFilms, setTrendingFilms] = useState(null);
    const [onLoad, setOnLoad] = useState(false);
  
    useEffect(() => {
      
      setOnLoad(true);
      fetchTrendingMovies().then(response => {
        setTrendingFilms([...response]);
        setOnLoad(false);
      });
    }, []);
  
    return (
      <main>
        {onLoad && <BallTriangle />}
        {trendingFilms && <MoviesList movies={trendingFilms} />}
      </main>
    );
  };

export default TrendingMovies;
  