import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear,
    addMovie
} from "./db";

export const home = (req, res) => {res.render("movies", { pageTitle : "Movies", movies : getMovies() });
};
export const movieDetail = (req, res) => {
    const { params: { id } } = req;
    const movie = getMovieById(id);
    console.log(movie)
    return  res.render("movieDetail", {movie})
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

export const handleMovie = (req, res) =>{
    console.log("Clicked [Add]")

    return res.render("addMovie",{
        pageTitle : "Add Movie"
    })
}

export const postMovie = (req,res) => {
    console.log("Clicked [Button]");

    const { body : {title,synopsis,genres}} = req;
    const genresLists = genres.split(",");
    
    addMovie({ 
        title,
        synopsis,
        genres : genresLists
    })

    return res.redirect("/");
}
