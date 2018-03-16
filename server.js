
//put this before the body-parser - this is what will allow access to html, css, images, etc.
app.use(express.static('public'))