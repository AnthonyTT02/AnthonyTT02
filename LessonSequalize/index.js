const db = require('./config/database')

let Actor = require('./models/actor')
let Genre = require('./models/genre')
let Director = require('./models/director')
let Film = require('./models/film')


Actor.sync({ force: true });
Genre.sync({ force: true });
Director.sync({ force: true });
Film.sync({ force: true });

