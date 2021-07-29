import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {res.render("movies", { pageTitle : "Movies", movies : getMovies() });
};
export const movieDetail = (req, res) => {
    const { params: { id } } = req;
    const idInfo = getMovieById(id);
    return  res.render("movieDetail", {idInfo})
};

export const filterMovie = (req, res) => {
    const { query : {year,rating}} = req;

    if(year){
        const movies = getMovieByMinimumYear(year);
        return res.render("movies", {
            pageTitle: `Searching by year: ${year}`,
            searchingBy: "year",
            searchingTerm: year,
            movies
        });
    }else{
        const movies = getMovieByMinimumRating(rating);
        return res.render("movies",{
            pageTitle: `Searching by year: ${rating}`,
            movies
        }) 
    }
};
