import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = 'c318186a7bfc382d3a0a4be08cb03883';
const BASE_URL = 'https://api.themoviedb.org/3'; 


export const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        return response.data.results;
        
      } catch (error) {
        console.error(error);
        toast("Something wrong");
      }
};
  

export const fetchSearchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length === 0) {
      toast("Oops...There are no such movies!");
    }
    return response.data.results;
  } catch (error) {
    toast("Something wrong");
    console.log(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast("Something wrong");
    console.log(error);
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (response.data.cast.length === 0) {
      toast("Oops...There are no casts");
    }
    return response.data.cast;
  } catch (error) {
    toast("Something wrong");
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (response.data.results.length === 0) {
      toast("Oops...There are no reviews");
    }
    return response.data.results;
  } catch (error) {
    toast("Something wrong");
    console.log(error);
  }
};
