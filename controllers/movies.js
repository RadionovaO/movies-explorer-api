const { ValidationError } = require('mongoose').Error;
const Movie = require('../models/movie');
const NotFoundError = require('../utils/errors/notFound');
const BadRequestError = require('../utils/errors/badRequest');
const ForbiddenError = require('../utils/errors/forbidden');
const { INCORRECT_DATA, NOT_FOUND, FORBIDDEN } = require('../utils/consts');

module.exports.createMovie = (req, res, next) => {
  // const { name, link } = req.body;
  // const owner = req.user._id;

  Movie.create({ owner: req.user._id, ...req.body })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequestError(INCORRECT_DATA));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { _id } = req.user;
  Movie.findById(req.params._id)
    .orFail(new NotFoundError(NOT_FOUND))
    .then((movie) => {
      if (movie.owner.toString() !== _id) {
        return Promise.reject(new ForbiddenError(FORBIDDEN));
      }

      return Movie.deleteOne(movie)
        .then(() => res.send({ message: 'Фильм удалён' }));
    })
    .catch((err) => next(err));
};

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;

  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch((err) => next(err));
};
