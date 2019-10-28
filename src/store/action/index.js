import axios from "axios";
//액션
export const TV_POPULAR = 'TV_POPULAR';
export const TV_TOP_RATED = 'TV_TOP_RATED';
export const TV_AIRING = 'TV_AIRING';
export const MOVIE_POPULAR = 'MOVIE_POPULAR';
export const MOVIE_TOP_RATED = 'MOVIE_TOP_RATED';
export const MOVIE_PLAYING = 'MOVIE_PLAYING';
export const NETFLIX_ORIGINAL = 'NETFLIX_ORIGINAL';

const api_key= "d983d85126d7c980fb1c4f7b6cb34bb1";
const language = "ko-KR";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

//액션 생성 함수


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

export const tvAiringData = (data) => {
    return {
        type: TV_AIRING,
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

export const moviePlayingData = (data) => {
    return {
        type: MOVIE_PLAYING,
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
export const apiTvAiring = () => {
    return (dispatch) => {
        return api.get(`tv/airing_today?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(tvAiringData(response.data))
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

export const apiTvTopRated = () => {
    return (dispatch) => {
        return api.get(`tv/top_rated?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(tvTopRatedData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};

export const apiMvPlaying = () => {
    return (dispatch) => {
        return api.get(`movie/now_playing?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(moviePlayingData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};

export const apiMvPopular = () => {
    return (dispatch) => {
        return api.get(`movie/popular?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(moviePopularData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};

export const apiMvTopRated = () => {
    return (dispatch) => {
        return api.get(`movie/top_rated?api_key=${api_key}&language=${language}`)
        .then(response => {
            dispatch(movieTopRatedData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};

export const apiOriginal = () => {
    return (dispatch) => {
        return api.get(`discover/tv?api_key=${api_key}&with_networks=213&language=${language}`)
        .then(response => {
            dispatch(movieNetflixOrigin(response.data))
        })
        .catch(error => {
            throw(error);
        })
    };
};
