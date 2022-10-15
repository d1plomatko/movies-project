import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './MovieListCard.module.css';


const MovieListCard = ({movie}) => {

    return (
        <div className={css.card}>
            <PosterPreview>{movie.poster_path}</PosterPreview>
            <MovieInfo movie={{...movie}}/>
        </div>
    );

};

export {MovieListCard};