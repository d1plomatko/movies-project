import {useNavigate} from "react-router-dom";

import css from './TrendingCard.module.css';

const TrendingCard = ({movie}) => {

    const navigate = useNavigate();

    return(
        <div className={css.trending_card} onClick={() => navigate(`/movies/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className={css.rating}>{movie.vote_average.toFixed(1)}</div>
            <div>{movie.title}</div>
        </div>
    )

}

export {TrendingCard}