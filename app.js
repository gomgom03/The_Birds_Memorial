const express = require("express");
let app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.set('view engine', 'ejs');

let server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/home', (req, res) => {
    res.render("index.ejs");
});

app.get('/birdexhibition', (req, res) => {
    res.render("birdexhibition.ejs");
});

app.get('/memorial', (req, res) => {
    res.render("memorial.ejs");
});

app.get('/survivors', (req, res) => {
    res.render("survivors.ejs");
});

app.get('/timeline', (req, res) => {
    res.render("timeline.ejs");
});

app.use(function (req, res, next) {
    res.status(404).send(`Nothing here. 404 <br><a href="/">or click here to GO HOME</a>`)
})