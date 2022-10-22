import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieDetailsInfo} from "../MovieDetailsInfo/MovieDetailsInfo";
import {TrailerPlayer} from "../TrailerPlayer/TrailerPlayer";
import css from './MovieDetails.module.css'


const MovieDetails = () => {

    const {movieID: id} = useParams();

    const {movieDetails, loading, error} = useSelector(state => state.moviesReducer);
    const {themes} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    const [trailer, setTrailer] = useState(false);

    useEffect(() => {
        dispatch(moviesActions.getById({id}))
    }, [id]);


    return (
        <div className={css.movie_container} id={themes.details}>
            {
                loading ?
                    <div className={css.loading}>
                        <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
                             alt="loading..."/>
                    </div> :
                    error ?
                        <div>{error.status_message}</div> :
                        <div>
                            <h1>{movieDetails.title}</h1>
                            <div className={css.upper}>
                                <div className={css.left}>
                                    {
                                        movieDetails.poster_path ?
                                            <PosterPreview
                                                movieTitle={movieDetails.title}>{movieDetails.poster_path}</PosterPreview> :
                                            <div className={css.background}>No photo</div>
                                    }
                                    {
                                        movieDetails.videos?.results ?
                                            <button className={css.btn}
                                                    onClick={() => setTrailer(true)}><i
                                                className="fa-solid fa-circle-play"></i> Play
                                                Trailer
                                            </button> :
                                            <div></div>
                                    }
                                    {trailer && <TrailerPlayer
                                        setTrailer={setTrailer}>{movieDetails.videos}</TrailerPlayer>}
                                </div>
                                <div className={css.right}>
                                    <MovieDetailsInfo movieDetails={movieDetails}/>
                                </div>
                            </div>
                            <div className={css.footer}>
                                <h3>Description</h3>
                                <div id={themes.details}
                                     className={css.overview}>{movieDetails.overview}</div>
                            </div>
                        </div>
            }
        </div>
    )

}

export {MovieDetails};