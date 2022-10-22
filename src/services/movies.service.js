import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getMovies: (page=1, genre='') => axiosService.get(urls.movies, {params: {page, with_genres: genre}}),
    searchMovies: ( query='', page =1) => axiosService.get(urls.search, {params: {page, query}}),
    getById: (id) => axiosService.get(`${urls.movie}/${id}&append_to_response=videos`)
};

export {
    moviesService
};