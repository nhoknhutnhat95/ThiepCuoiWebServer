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

//Server
const port = 5000
const server =  app.listen(port, () => {
    console.log(`Server start with port: ${port}`)
})
