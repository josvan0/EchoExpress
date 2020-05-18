'use strict'

require('dotenv').config();
const express = require('express');

// creates application express
const app = express();

// middlewares
// custom middleware
// req = request, res = response, next = function to execute
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${req.ip}`);
    // if don't call next, client enters in a infinite loop
    next();
});

// routes
// the ? indicate that param can be undefined (null)
app.get('/:text?', (req, res) => {
    if (req.params.text === undefined) {
        // response with JSON, this method set the headers too
        res.json({ echo: 'Hello' });
    } else {
        res.json({ echo: req.params.text });
    }
});

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
