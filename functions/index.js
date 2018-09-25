const functions = require('firebase-functions');
const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

exports.app = functions.https.onRequest(app);
