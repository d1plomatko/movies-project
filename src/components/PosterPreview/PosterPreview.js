const PosterPreview = ({children}) => {
    
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${children}`} alt=""/>
        </div>
    )
    
}

export {PosterPreview}