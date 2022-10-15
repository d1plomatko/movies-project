import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {

    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzkwYjgyMzZlYzk5ODMwOTRkMzEyYjNhNTc3NjkyNiIsInN1YiI6IjYzNGE1NTI0MDIxY2VlMDA3ZGMwY2YwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruvitmA7vtHVt1tp-c8bWYbg3SsI5yc6MpCz4P4pWSQ'

    return config
});

export {
    axiosService
};