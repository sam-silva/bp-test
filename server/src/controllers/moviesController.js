import fs from 'fs'
import { isNotNull, isNotNaN } from "../utils/functions"
import { body, validationResult } from 'express-validator';
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
    console.log(req.body, req.params.movieId)
    return res.status(200).json({
        message: req.body
    })
}


export default { getMovies, showMovie, editMovie, validateMovieId }