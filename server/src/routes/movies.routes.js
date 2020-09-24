import express from 'express'
import moviesController from '../controllers/moviesController'
const router = express.Router()

router.route('/movies')
    .get(moviesController.getMovies)

router.route('/movies/:movieId')
    .get(moviesController.showMovie)
    .put(moviesController.editMovie)
router.param('movieId', moviesController.validateMovieId)
export default router
