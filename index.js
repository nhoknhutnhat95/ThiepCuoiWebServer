const express = require('express');
const path = require('path')
const app = express();

//init middlewares
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// init router
app.get('/', (req, res, next) => {
    res.render('index');
});


//server
const port = 5000
const server =  app.listen(port, () => {
    console.log(`Server start with port: ${port}`)
})
