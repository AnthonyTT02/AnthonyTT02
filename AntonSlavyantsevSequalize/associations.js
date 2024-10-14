const Actor = require('./models/actor');
const Director = require('./models/director');
const Film = require('./models/film');
const Genre = require('./models/genre');


Director.hasMany(Film);
Film.belongsTo(Director);


Film.belongsToMany(Actor, { through: 'FilmActors' });
Actor.belongsToMany(Film, { through: 'FilmActors' });


Film.belongsToMany(Genre, { through: 'FilmGenres' });
Genre.belongsToMany(Film, { through: 'FilmGenres' });
