
// Express Framework

const express = require('express');
    const app = express();

const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended: true} ));

const api = require('./api');
const res = require('express/lib/response');
    app.use('/api/v1', api);

    app.use(function(req, res) {
        const err = new Error();
        err.message = 'Bad request. Use localhost:8080/api/v1/resourceName';
        res.send(err.message);
    });

// Database Connection
const db = require('./dbase');

const appStart = async () => {
    await db.connect('mongodb://localhost:27017');
// Start App Server     
    app.listen(8080);
    console.log('App Server is listening on port: 8080...');
}
appStart();