import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();
// console.log(process.env.api_key);

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    // params: {
    //     api_key: "d983d85126d7c980fb1c4f7b6cb34bb1",
    //     language: "ko-KR"
    // }
});

export const tvApi = {
  topRated: () => api.get(`tv/top_rated?api_key=d983d85126d7c980fb1c4f7b6cb34bb1&language=ko-KR`),
  popular: () => api.get(`tv/popular?api_key=d983d85126d7c980fb1c4f7b6cb34bb1&language=ko-KR`),
  latest: () => api.get(`tv/latest?api_key=d983d85126d7c980fb1c4f7b6cb34bb1&language=ko-KR`),
  detail: (id) => api.get(`tv/${id}?append_to_response: videos&api_key=d983d85126d7c980fb1c4f7b6cb34bb1&language=ko-KR`)
};
