import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getGenres: () => axiosService.get(urls.genres)
};

export {
    genreService
};