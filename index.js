const express = require('express');
const path = require('path')
const app = express();

app.use('/', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');


app.get('/', (req, res, next) => {
    res.render('index');
});
app.listen(5000, () => {
    console.log("Server start")
})
