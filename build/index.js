"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const imageRouter = require('./routes/imageRoutes');
const requestLogger = require('./middleware/logger').requestLogger;
const app = express();
app.use(requestLogger);
app.use('/image', imageRouter);
app.listen(3000, () => {
    console.log('Server started on host 3000..');
});
//# sourceMappingURL=index.js.map