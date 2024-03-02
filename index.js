const express = require('express');
const path = require('path')
const app = express();
var morgan = require('morgan')

//Init middlewares
app.use('/', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'))
//Init router
app.use('/', require('./Routers/index.router'))
app.get('/dung-long-wedding', (req, res, next) => {
    res.render('DungLongWedding')
})
app.get('/template1', (req, res, next) => {
    res.render('template1')
})
app.get('/hoang-huyen-wedding/home', (req, res, next) => {
    res.render('HoangHuyen/index')
})
app.get('/hoang-huyen-wedding/love-story', (req, res, next) => {
    res.render('HoangHuyen/love-story')
})
app.get('/hoang-huyen-wedding/best-wish', (req, res, next) => {
    res.render('HoangHuyen/best-wish')
})
app.get('/hoang-huyen-wedding/album', (req, res, next) => {
    res.render('HoangHuyen/gallery')
})
app.get('/hoang-huyen-wedding/event', (req, res, next) => {
    res.render('HoangHuyen/event')
})
app.get('/hoang-huyen-wedding/map', (req, res, next) => {
    res.render('HoangHuyen/map')
})
app.get('/hoang-huyen-wedding/qrcode', (req, res, next) => {
    res.render('HoangHuyen/qrcode')
})
app.get('/hoang-huyen-wedding/video', (req, res, next) => {
    res.render('HoangHuyen/video')
})




//Server
const port = 5000
const server = app.listen(port, () => {
    console.log(`Server start with port: ${port}`)
})
