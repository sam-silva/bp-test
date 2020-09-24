import fs from 'fs'
import { isNotNull, isNotNaN } from "../utils/functions"
//utils 
const readMoviesJson = (func) => fs.readFile(process.cwd() + "/movies.json", 'utf8', func)
const handleError = (res) => res.status('400').json({
    error: "Something went wrong finding the movies."
})
const findMovie = ({ results }, id) => results.find((movie) => movie.id === parseInt(id))

//validate params
const validateMovieId = (req, res, next, id) => {
    if (isNotNull(id) && isNotNaN(id)) {
        next();
        return;
    }
    return res.status(400).json({
        error: "Search not valid"
    })
}

const validateBody = (req, res, next) => {
    body("cast").isString().isLength({ min: 3, max: 150 })
    body("cast").isString().isLength({ min: 3, max: 150 })
}

//controller methods 
const getMovies = async (req, res) => {
    readMoviesJson((err, data) => {
        if (err) {
            return handleError(res)
        }
        return res.status(200).json({
            movies: JSON.parse(data)
        })
    });

}


const showMovie = async (req, res) => {
    readMoviesJson((err, data) => {
        if (!err) {
            const movie = findMovie(JSON.parse(data), req.params.movieId)
            if (!movie) {
                return handleError(res)
            }
            return res.status(200).json({
                movie
            })
        }
        return handleError(res)
    });
}



const editMovie = async (req, res) => {
    readMoviesJson((err, data) => {
        if (!err) {
            let movies = JSON.parse(data);
            let movie = findMovie(movies, req.params.movieId)
            let index = movies.results.findIndex((movie) => movie.id === req.params.movieId);
            if (!movie) {
                return handleError(res)
            }
            movie = {
                ...movie,
                title: req.body.title,
                details: [
                    {
                        cast: req.body.cast || "",
                        director: req.body.director,
                        storyline: req.body.director || "",
                    }, ...movie.details.slice(1)],
                images: [
                    {
                        url: req.body.url
                    },
                    ...movie.images.slice(1)
                ],
                videos: [{ url: req.body.trailer }, ...movie.videos]
            }
            movies.results = [
                ...movies.results.slice(0, index),
                movie,
                ...movies.results.slice(index + 1)
            ]

            fs.writeFile(`./files/${Date.now()}.txt`, movies, 'utf8', function (err) {
                if (err) return console.log(err);
            });

            return res.status(200).json({
                movie
            })
        }
        return handleError(res)
    });
}


export default { getMovies, showMovie, editMovie, validateMovieId }