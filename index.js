const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
const path = require('path');
const logger = require('morgan');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.set('port', 3000);
app.use(logger('dev'));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

app.engine('hbs', hbs.express4({
    defaultLayout: path.join(app.get('views'), 'layouts/home.hbs'),
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir:  path.join(app.get('views'), 'layouts'), 
}));



require('./src/routes')(app)

app.listen(app.get('port'), () => {
    console.log(`😀 Server started at port ${app.get('port')}`);
})

module.exports = app;