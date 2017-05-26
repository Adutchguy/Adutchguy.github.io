'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL + 'music';
const client = new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}))
app.get('/videos', (request, response) => response.sendFile('index.html', {root: './public'}))
app.get('/lol', (request, response) => response.sendFile('index.html', {root: './public'}))

app.get('/*', function(request, response) {
  console.log('OH NOES A 404!!!');
  response.status(404).sendFile('404.html', { root: './public'});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
