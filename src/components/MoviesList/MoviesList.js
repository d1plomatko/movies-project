import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css';
import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {current} from "@reduxjs/toolkit";


const MoviesList = () => {

    const {movies, totalPages, currentPage} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const handlePagination = (value) => {
        setQuery({page: value.toString()})
            window.scrollTo(0, 0)
    }



    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get('page')}));
    }, [query]);

    return (
        <div className={css.cards_wrapper}>
            <div className={css.cards}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <Pagination count={totalPages}
                        className={css.pagination}
                        onChange={(_, num) => handlePagination(num)}
            />
        </div>
    );
};

export {MoviesList};