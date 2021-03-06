const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const databaseRouter = require('./routes/database');
const apiRouter = require('./routes/api')
const cors = require('cors')

// parse requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cors
app.use(cors())

// use routers
app.use('/database', databaseRouter);
app.use('/api', apiRouter);

// serve static HTML

// global error handler
app.use((err, req, res, next) => {
  console.log(err.log);
  return res.status(err.status).json(err.message);
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;