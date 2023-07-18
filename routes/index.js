const router = require('express').Router();

const routerUsers = require('./users');
const routerMovies = require('./movies');
const NotFoundError = require('../utils/errors/notFound');
const { createUser, login, signOut } = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const { validateCreateUser, validateLogin } = require('../middlewares/validation');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signin', validateLogin, login);

router.post('/signup', validateCreateUser, createUser);

router.use(auth);

router.get('/signout', signOut);

router.use(routerUsers);
router.use(routerMovies);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Передан некорректный путь'));
});

module.exports = router;
