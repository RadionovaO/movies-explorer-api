const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/unauthorized');
const { SECRET } = require('../utils/config');

module.exports.auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    if (!token) {
      next(new UnauthorizedError('Необходима авторизация'));
    }
    payload = jwt.verify(token, SECRET);
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
  }
  req.user = payload;

  return next();
};
