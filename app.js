require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes');
const { errorsHandler } = require('./middlewares/errorsHandler');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { LIMITER } = require('./utils/config');
const { PORT, MONGODB } = require('./utils/config');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(helmet());

app.use(cors);

mongoose.connect(MONGODB);

app.use(requestLogger);

app.use(LIMITER);

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on ${PORT} port`);
});
