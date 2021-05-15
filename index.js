const express = require('express');
const app = express();

const path = require('path');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home');
})

const Port = process.env.Port || 2000

app.listen(Port, () => {
    console.log(`Running on PORT ${Port}`);
})