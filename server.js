const express = require('express')
const logger = require('morgan')
const app = express()
// const methodOverride = require('method-override');

//calling all established functions
const cityApi = require('./API/cityApi');
const parkApi = require('./API/parkApi');

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(`${__dirname}/client/build`))


// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
//   })

app.get('/', (req, res) => {
 res.send("Hello World")
});



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
    cityApi.createNewCities(req.body)
        .then((cities) => {
            res.send(cities);
        });
});

// Deleting a new City
app.delete('/cities/:cityId', (req, res) => {
    cityApi.deleteCityById(req.params.cityId)
        .then((cities) => {
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
        .then((city) => {
            res.send(city)
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

// Posting a new Park
app.post('/parks', (req, res) => {
    parkApi.createPark(req.body)
        .then((parks) => {
            res.send(parks);
        });
});

// Deleting a Park
app.delete('/parks/:parkId', (req, res) => {
    parkApi.deleteParkById(req.params.parkId)
        .then((parks) => {
            res.send(parks);
        });
});

// Grab a single Park Object
app.get('/parks/:parkId', (req, res) => {
    //gets park
    parkApi.getParkById(req.params.parkId)
        .then(park => {
            res.send(park);
        });
});

// Updating a Park
app.put('/parks/:parkId', (req, res) => {
    parkApi.updateParkById(req.params.parkId, req.body)
        .then((park) => {
            res.send(park);
        });
});
// // Update Route 2
// app.put('/parks/:parkId', (req, res) => {
//     parkApi.updateParkById(req.params.parkId, req.body)
//         .then(() => {
//             res.redirect("/parks");
//         });
// });

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})