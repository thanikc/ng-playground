const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/oauth', require('./oauth'));

app.use('/', function(req, res) {
  // used for health check
  res.send('OK');
});

app
  .route('/*')
  .get(defaultHandler)
  .put(defaultHandler)
  .post(defaultHandler)
  .delete(defaultHandler)
  .options(defaultHandler);

const server = app.listen(port, () => console.log(`Mock Server listening on port ${port}`));

function closeServer(msg) {
  console.log(msg);
  server.close(() => console.log('Mock Server closed!'));
}

function defaultHandler(req, res) {
  console.log(req.method, req.path, req.headers);
  res.status(404).json('Mock not implemented.');
}
