import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieDetailsInfo} from "../MovieDetailsInfo/MovieDetailsInfo";
import css from './MovieDetails.module.css'





const MovieDetails = () => {

    const {movieID: id} = useParams();

    const {movieDetails, loading} = useSelector(state => state.moviesReducer);
    const {themes} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getById({id}))
    }, [id])


    return (
        <div className={css.movie_container} id={themes.details}>
            {
                loading ?
                    <div></div>:
                    <div>
                        <h1>{movieDetails.title}</h1>
                        <div className={css.upper}>
                            <div className={css.left}>
                                {
                                    movieDetails.poster_path ?
                                        <PosterPreview>{movieDetails.poster_path}</PosterPreview> :
                                        <div className={css.background}>No photo</div>
                                }
                            </div>
                            <div className={css.right}>
                                <MovieDetailsInfo movieDetails={movieDetails}/>
                            </div>
                        </div>
                        <div className={css.footer}>
                            <h3>Description</h3>
                            <div id={themes.details} className={css.overview}>{movieDetails.overview}</div>
                        </div>
                    </div>
            }
        </div>
    )

}

export {MovieDetails}