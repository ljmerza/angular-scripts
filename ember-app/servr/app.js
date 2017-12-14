var express = require('express');
var cors = require('cors')

var pogoRoutes = require('./routes');
var app = express();

app.use(cors());
app.use('/api', pogoRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  console.log('err:', err)

  res.status(err.status || 500);
  res.end();
});

module.exports = app;
