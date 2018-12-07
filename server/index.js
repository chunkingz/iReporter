import express from 'express';
import router from './routes/index';
import 'babel-polyfill';

const app = express();
require('dotenv').config();

// parse incoming requests with middleware
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  const welcomeMsg = '<h2>Welcome to the iReporter API.</h2><br><h3>You can check out the ui templates hosted on github pages <a href= "https://chunkingz.github.io/iReporter/">here</a></h3>';
  return res.status(200).send(welcomeMsg);
});
app.get('/api/v1', (req, res) => {
  const welcome = 'You are on the right path';
  return res.status(200).send(welcome);
});

app.all('*', (req, res) => {
  res.status(404).send('This route was not found please enter a valid route...');
});

// start server on port
const server = app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('iReporter app running on port.', server.address().port);
});

export default app;
