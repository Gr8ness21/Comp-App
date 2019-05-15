const express = require('express')
const logger = require('morgan')
const app = express()

//calling all established functions
const cityApi = require('./API/cityApi');
const parkApi = require('./API/parkApi');

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/cities', (req, res) => {
    cityApi.getAllCities()
        .then(cities => {
            res.send(cities);
        });
});







const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})