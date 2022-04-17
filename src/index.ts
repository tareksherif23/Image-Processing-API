import {Application} from 'express';

const express = require('express');
const app: Application = express();

const imageRouter = require('./routes/imageRoutes');
app.use('/image', imageRouter);

app.listen(3000, () => {
  console.log('Server started on host 3000..');
});
