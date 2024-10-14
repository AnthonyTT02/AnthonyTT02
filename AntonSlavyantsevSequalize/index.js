const sequelize = require('./config/database')

let Actor = require('./models/actor')
let Director = require('./models/director')
let Film = require('./models/film')
let Genre = require('./models/genre')

Actor.sync({ force: true })
Director.sync({ force: true })
Film.sync({ force: true })
Genre.sync({ force: true })