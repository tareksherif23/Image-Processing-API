import {Application} from 'express';

const express = require('express');
const imageRouter = require('./routes/imageRoutes');
const requestLogger = require('./middleware/logger').requestLogger;

const app: Application = express();

app.use(requestLogger);
app.use('/image', imageRouter);

app.listen(3000, () => {
  console.log('Server started on host 3000..');
});
