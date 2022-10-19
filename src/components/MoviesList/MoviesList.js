import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {genreActions, moviesActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";

import css from './MovieList.module.css';


const MoviesList = () => {
    const {themes} = useSelector(state => state.themeReducer);
    const {movies, totalPages, currentPage, loading} = useSelector(state => state.moviesReducer);
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

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        if (data.query !== '') {
            setQuery({query: data.query, page: '1'})
        }
        reset()
    }

    const toFirst = () => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: '1'})
        } else if (query.get('with_genres')) {
            setQuery({page: '1', with_genres: query.get('with_genres').toString()})
        } else {
            setQuery({page:'1'})
        }
        window.scrollTo(0, 0)
    }

    const prev = () => {
        if (query.get('query')) {
            setQuery(value =>({query: query  .get('query'), page: value.get('page') - 1}))
        } else if (query.get('with_genres')) {
            setQuery( value =>({page: value.get('page') - 1, with_genres: query.get('with_genres').toString()}))
        } else {
            setQuery(value =>({page: value.get('page') - 1}))
        }
        window.scrollTo(0, 0)
    }

    const next = () => {
        if (query.get('query')) {
            setQuery(value =>({query: query  .get('query'), page: +value.get('page') + 1}))
        } else if (query.get('with_genres')) {
            setQuery( value =>({page: +value.get('page') + 1, with_genres: query.get('with_genres').toString()}))
        } else {
            setQuery(value =>({page: +value.get('page') + 1}))
        }
        window.scrollTo(0, 0)
    }

    const toLast = () => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: totalPages.toString()})
        } else if (query.get('with_genres')) {
            setQuery({page: totalPages.toString(), with_genres: query.get('with_genres').toString()})
        } else {
            setQuery({page: totalPages.toString()})
        }
        window.scrollTo(0, 0)
    }

    return (
        <div className={`${css.cards_wrapper} cards`} id={themes.main}>
            <div className={css.filters} id={themes.search}>
                <div className={css.buttons}>
                    {genres.map(genre => <button
                        onClick={() => setQuery({page: '1', with_genres: genre.id.toString()})}
                        key={genre.id}>{genre.name}</button>)}
                </div>
                <form onSubmit={handleSubmit(submit)} className={css.search}>
                    <input type="text" placeholder={'Search by name'} {...register('query')}/>
                    <button>Search</button>
                </form>
            </div>
            {
                loading ?
                    <div className={css.box}></div> :

                    <div>
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
                        <div className={css.cards}>
                            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                        </div>
                    </div>

            }

            <div className={css.pagination}>
                <button disabled={query.get('page') === '1'} onClick={toFirst}><i className="fa-solid fa-angles-left"></i></button>
                <button disabled={query.get('page') === '1'} onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>
                <div className={css.page_number}>{query.get('page')}</div>
                <button disabled={query.get('page') === totalPages.toString()} onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
                <button disabled={query.get('page') === totalPages.toString()} onClick={toLast}><i className="fa-solid fa-angles-right"></i></button>
            </div>

        </div>
    );
};

export {MoviesList};