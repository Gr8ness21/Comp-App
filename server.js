const express = require('express')
const logger = require('morgan')
const app = express()
const methodOverride = require('method-override');

//calling all established functions
const cityApi = require('./API/cityApi');
const parkApi = require('./API/parkApi');

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World")
})

// _____________________________________
//              City Model 
// _____________________________________


app.get('/cities', (req, res) => {
    cityApi.getAllCities()
        .then(cities => {
            res.send(cities);
        });
});

// Posting a new City
app.post('/cities', (req, res) => {
    teamApi.createNewCities(req.body)
        .then((cities) => {
            res.send(cities);
        });
});

// Deleting a new City
app.delete('/cities/:cityId', (req, res) => {
    cityApi.deleteCityById(req.params.cityId)
        .then(() => {
            res.send(cities);
        });
});

// Access a single City
app.get('/cities/:cityId', (req, res) => {
    //gets city
    cityApi.getCityById(req.params.cityId)
        .then((city) => {
            parkApi.getParksByCityId(req.params.cityId)
                .then((parks) => {
                    console.log(city)
                    console.log(parks)
                    res.send(cities/parks, { city, parks });
                });
        });
});

// Update a City
app.put('/cities/:cityId', (req, res) => {
    cityApi.updateCityById(req.params.cityId, req.body)
        .then(() => {
            res.redirect("/cities");
        });
});

// _____________________________________
//              Park Model 
// _____________________________________

app.get('/parks', (req, res) => {
    parkApi.getAllParks()
        .then(parks => {
            res.send(parks);
        });
});


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})