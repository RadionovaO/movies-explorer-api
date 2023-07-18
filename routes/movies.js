const router = require('express').Router();

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

const { validateCreateMovie, validateDeleteMovie } = require('../middlewares/validation');

router.get('/movies', getMovies);

router.post('/movies', validateCreateMovie, createMovie);

router.delete('/movies/:_id', validateDeleteMovie, deleteMovie);

module.exports = router;
