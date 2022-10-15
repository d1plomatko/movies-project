import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getMovies: (page=1) => axiosService.get(urls.movies, {params: {page}})
};

export {
    moviesService
};