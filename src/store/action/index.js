import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";
// import dotenv from 'dotenv';

// dotenv.config();
// console.log(process.env.api_key);

//액션
export const TV_TRENDING = 'TV_TRENDING';
export const TV_POPULAR = 'TV_POPULAR';
export const TV_TOP_RATED = 'TV_TOP_RATED';
export const TV_LATEST = 'TV_LATEST';
export const MOVIE_TRENDING ='MOVIE_TRENDING';
export const MOVIE_POPULAR = 'MOVIE_POPULAR';
export const MOVIE_TOP_RATED = 'MOVIE_TOP_RATED';
export const MOVIE_LATEST = 'MOVIE_LATEST';
export const NETFLIX_ORIGINAL = 'NETFLIX_ORIGINAL';

const api_key= "d983d85126d7c980fb1c4f7b6cb34bb1";
const language = "ko-KR";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

//액션 생성 함수

export const tvTrendingData = (data) => {
    return {
        type: TV_TRENDING,
        data
    };
};

export const tvPopularData = (data) => {
    return {
        type: TV_POPULAR,
        data
    };
};

export const tvTopRatedData = (data) => {
    return {
        type: TV_TOP_RATED,
        data
    };
};

export const tvLatestData = (data) => {
    return {
        type: TV_LATEST,
        data
    };
};

export const movieTrendingData = (data) => {
    return {
        type: MOVIE_TRENDING,
        data
    };
};

export const moviePopularData = (data) => {
    return {
        type: MOVIE_POPULAR,
        data
    };
};

export const movieTopRatedData = (data) => {
    return {
        type: MOVIE_TOP_RATED,
        data
    };
};

export const movieLatestData = (data) => {
    return {
        type: MOVIE_LATEST,
        data
    };
};

export const movieNetflixOrigin = (data) => {
    return {
        type: NETFLIX_ORIGINAL,
        data
    };
};

//api 호출
//https://stackoverflow.com/questions/36367648/handling-api-calls-in-redux-with-axios
export const apiTvLatest = () => {
    return (dispatch) => {
        return api.get(`tv/latest?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(tvLatestData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};

export const apiTvPopular = () => {
    return (dispatch) => {
        return api.get(`tv/popular?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(tvPopularData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};