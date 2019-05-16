let ParksModel = require('../API/parkApi.js')
// const mongoose = require('./connection.js');
// const ObjectId = mongoose.Schema.Types.ObjectId;


// const ParkSchema = mongoose.Schema({
//     name: String,
//     bio: String,
//     side: String,
//     location: Object,
//     userId: ObjectId
// });
// let ParksModel = require("parks")

let CityParks = [

    {name: "Central Park",
    bio: "Green",
    side: "North"
},
    {name: "Centennial Olympic Park",
    bio: "Green and tons of fun",
    side: "SouthWest"
},
    {name: "Coan Park",
    bio: "",
    side: "",
},
    {name: "Lang-Carson Park"

},
    {name: "Piedmont Park"

},
    {name: "Grant Park"

},
    {name: "Rawson-Washington Park"

},
    {name: "East Lake Park"

},
    {name: "Washington"

},
    {name: "McKoy Park"

}


]
// console.log(ParksModel)

ParksModel.ParkSchema.deleteMany({})
  .then(() => { 
      Parks.create(CityParks).then(()=>{
        console.log('Data Done Seeding')
      })
  })





// Donut.remove({})
//   .then(() => { 
//     Ingredients.remove({}) })
//   .then(
//     Donut.create(newDonuts).then(()=>{
//     console.log('Data Done Seeding')
//   }))
