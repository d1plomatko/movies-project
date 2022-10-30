import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";

import {trendingActions} from "../../redux";
import {TrendingCard} from "../TrendingCard/TrendingCard";

import css from './TrendingSwiper.module.css';
import 'swiper/css'
import 'swiper/css/navigation'

const TrendingSwiper = () => {

    const {trending} = useSelector(state => state.trendingReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trendingActions.getAll())
    }, [])

    return(
       <div className={`${css.swiper} swiper_dark`}>
           <div className={css.text}>Trending today</div>
           <Swiper
               loop={true}
               spaceBetween={10}
               slidesPerView={8}
               navigation={{

               }}
               modules={[Pagination, Navigation, Autoplay]}>
               {
                   trending.map(movie => <SwiperSlide key={movie.id}><TrendingCard movie={movie}/></SwiperSlide>)
               }
           </Swiper>
       </div>
    )

}

export {TrendingSwiper}