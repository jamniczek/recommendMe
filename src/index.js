const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const _ = require('lodash');
const templates = require('./templates/templates')

const keys = require('./config/keys');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// just for booting app on heroku, to avoid delay/500 on the first request
app.get('/boot', () => {

});

app.post('/dialogflow/recommend', (req, res) => {  
  const titles = _.values(req.body.queryResult.parameters).map(title => encodeURI(title));
  console.log(titles)
  const type = req.body.queryResult.parameters.category;


  axios.get(`https://tastedive.com/api/similar?info=1&type=${type}&limit=5&q=${titles[0]}%2C${titles[1]}&%2C${titles[2]}&k=${keys.tastediveKey}`)
    .then((results) => {
      const recomendations = results.data.Similar.Results;
      if (recomendations.length === 0) {
        return res.status(404).send({ message: 'No recommendations found!' });
      }
      return res.send(recomendations);
    })
    .catch(err => res.status(500).send(err.message));
});

app.post('/recommend', (req, res) => {
  const titles = req.body.titles.map(title => encodeURI(title));
  const { type } = req.body;

  axios.get(`https://tastedive.com/api/similar?info=1&type=${type}&limit=5&q=${titles[0]}%2C${titles[1]}&%2C${titles[2]}&k=${keys.tastediveKey}`)
    .then((results) => {
      const recomendations = results.data.Similar.Results;
      if (recomendations.length === 0) {
        return res.status(404).send({ message: 'No recommendations found!' });
      }
      return res.send(recomendations);
    })
    .catch(err => res.status(500).send(err.message));
});

app.listen(PORT);

module.exports = app;
