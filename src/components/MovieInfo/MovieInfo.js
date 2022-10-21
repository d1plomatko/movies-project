import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './MovieInfo.module.css';

const MovieInfo = ({movie}) => {

    return (
        <div className={css.movie_info}>
            <div className={css.upper}>
                <div className={css.movie_title}>{movie.title}</div>
                <div className={css.date}>{movie.release_date}</div>
            </div>
            <GenreBadge>{movie.genre_ids}</GenreBadge>
            <div className={css.rating}>
                <StarsRating>{movie.vote_average}</StarsRating>
                <div className={css.number_wrapper}>{movie.vote_average}</div>
            </div>
        </div>
    )

}

export {MovieInfo};