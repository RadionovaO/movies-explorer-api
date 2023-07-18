const router = require('express').Router();
const cookieParser = require('cookie-parser');

const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

const { validateUpdateUser } = require('../middlewares/validation');

router.use(cookieParser());

router.get('/users/me', getCurrentUser);

router.patch('/users/me', validateUpdateUser, updateUser);

module.exports = router;
