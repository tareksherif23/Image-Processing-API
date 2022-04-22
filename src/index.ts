import {Application} from 'express';
import {router} from './routes/router';
import {requestLogger} from './middleware/logger';
import express from 'express';

const app: Application = express();
const PORT = 3000;

app.use(requestLogger);
app.use('/', router);

app.listen(3000, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
