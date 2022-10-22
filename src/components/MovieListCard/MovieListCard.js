import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {MovieInfo} from "../MovieInfo/MovieInfo";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieListCard.module.css';

const MovieListCard = ({movie}) => {
    const {themes} = useSelector(state => state.themeReducer);

    const navigate = useNavigate();

    return (
        <div className={css.card} id={themes.card} onClick={()=> navigate(`/movies/${movie.id}`)}>
            {movie.poster_path? <PosterPreview movieTitle={movie.title}>{movie.poster_path}</PosterPreview> : <div className={css.background}>no photo</div>}
            <MovieInfo movie={{...movie}}/>
        </div>
    );

};

export {MovieListCard};