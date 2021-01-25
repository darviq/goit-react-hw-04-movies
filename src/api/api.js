import axios from "axios";

const apiData = {
    path: "https://api.themoviedb.org/3/",
    key: "184a747c2ec334a0b348e65b14a8221e",
};

export const findTrending = async () => {
    const response = await axios.get(`${apiData.path}trending/all/day?api_key=${apiData.key}`);
    return response.data.results;
};

export const findByQuery = async query => {
    const response = await axios.get(`${apiData.path}search/movie?api_key=${apiData.key}&query=${query}`);
    return response.data.results;
};

export const findMovieDetails = async id => {
    const response = await axios.get(`${apiData.path}movie/${id}?api_key=${apiData.key}`);
    return response.data;
};

export const findMovieCast = async id => {
    const response = await axios.get(`${apiData.path}movie/${id}/credits?api_key=${apiData.key}`);
    return response.data.cast;
};

export const findMovieReviews = async id => {
    const response = await axios.get(`${apiData.path}movie/${id}/reviews?api_key=${apiData.key}`);
    return response.data.results;
};
