import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

import {genreActions, moviesActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css';
import {NavBar} from "../NavBar/NavBar";
import {TrendingSwiper} from "../TrendingSwiper/TrendingSwiper";

const MoviesList = () => {

    const {
        movies,
        totalPages,
        currentPage,
        loading,
        error
    } = useSelector(state => state.moviesReducer);
    const {genres} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        dispatch(genreActions.getGenres())

        if (!query.get('query')) {
            dispatch(moviesActions.getMovies({
                page: query.get('page'),
                genre: query.get('with_genres')
            }));
        } else {
            dispatch(moviesActions.search({page: query.get('page'), query: query.get('query')}))
        }

    }, [query, currentPage]);

    const handlePagination = (value) => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: value.toString()});
        } else if (query.get('with_genres')) {
            setQuery({
                page: value.toString(),
                with_genres: query.get('with_genres').toString()
            });
        } else {
            setQuery({page: value.toString()});
        }
        window.scrollTo(0, 0);
    }

    if (loading) {
        return (
            <div className={`${css.loading} main`}>
                <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
                     alt="loading..."/>
            </div>
        )
    } else if (error) {
        return (
            <div className={css.error}>{error.status_message}</div>
        )
    }

    return (
        <div className={`${css.container} main`}>

            <NavBar query={query} setQuery={setQuery}/>
            <TrendingSwiper/>

            {
                query.get('with_genres') ?
                    <h2>{(genres.find(value => value.id === parseInt(query.get('with_genres'))))?.name} genre</h2> :
                    <div></div>
            }
            {
                query.get('query') ?
                    <h2>Results of search «{query.get('query')}»</h2> :
                    <div></div>
            }

            {
                movies.length === 0 ?
                    <div className={css.no_matches}>No matches found</div> :
                    <div>
                        <div className={css.cards_wrapper}>
                            {movies.map(movie => <MovieListCard key={movie.id}
                                                                movie={movie}/>)}
                        </div>

                        <Pagination count={totalPages}
                                    variant={"outlined"}
                                    shape={"rounded"}
                                    page={parseInt(query.get('page'))}
                                    onChange={(_, num) => handlePagination(num)}
                                    className={css.pagination}/>

                    </div>
            }

        </div>
    );
};

export {MoviesList};