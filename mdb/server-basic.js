
// Bare-minimum server with express structure

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

// function to start app server
const appStart =  () => {
    // async & await db_call_function goese here...
    app.listen(8080);
    console.log('App Server is listening on port: 8080...');

}
appStart();