const express = require('express');
const express = require('express');
const path = require('path');
const PORT = 3010;


/* Enrutadores */
const indexRouter = require('./routes/indexRouter')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs') ;

/* Middlewares */


app.use(express.static(path.join(__dirname, '../public')));


/* Routes */
app.use('/', indexRouter)

app.listen(PORT, () => console.log(
    `-------------------------------
    servidor levantado en el puerto${PORT}
    http://localhost:${PORT}
    --------------------------------
    `    
))
module.exports = app