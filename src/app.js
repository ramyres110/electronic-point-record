'use strict';
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const { logErrors, clientErrorHandler, errorHandler } = require('./utils/errorUtils');

const api = require('./routes/api-route');

const app = express();

app.use(logger('common'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const publicFolderPath = path.join(__dirname + '/..', 'public');
app.use(express.static(publicFolderPath));

app.use('/api/v1/', cors(), api);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

module.exports = app;