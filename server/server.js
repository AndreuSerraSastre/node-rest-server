require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) return Error(err);

    console.log('Base de datos conectada');

});

app.use(require('./controllers/index'));


app.listen(process.env.PORT, () => {
    console.log(`Estoy en la url: http://localhost:${process.env.PORT}`)
});