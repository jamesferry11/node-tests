const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Kooper',
        age: 4
    }, {
        name: 'McKay',
        age: 4
    }, {
        name: 'Lincoln',
        age: 8
    }]);
});

app.listen(3000);
module.exports.app = app;