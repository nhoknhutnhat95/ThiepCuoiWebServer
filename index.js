const express = require('express');
const path = require('path')
const app = express();

//Init middlewares
app.use('/', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Init router

app.get('/', (req, res, next) => {
    res.render('index');
});
app.get('/dung-long-wedding', (req, res, next) => {
    res.render('DungLongWedding')
})
app.get('/template1', (req, res, next) => {
    res.render('template1')
})

//Server
const port = 5000
const server = app.listen(port, () => {
    console.log(`Server start with port: ${port}`)
})
