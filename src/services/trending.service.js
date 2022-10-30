import {axiosService} from "./axios.service";
import {urls} from "../configs";

const trendingService = {
    getAll: () => axiosService.get(urls.trending)
};

export {
    trendingService
};