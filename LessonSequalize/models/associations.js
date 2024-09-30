const Actor = sequelize.define('Actor', { name: DataTypes.STRING});
const Director = sequelize.define('Director', {name: DataTypes.STRING});
const Film = sequelize.define('Film', {name: DataTypes.STRING});
const Genre = sequelize.define('Genre', {name: DataTypes.STRING});


Film.belongsToMany(Actor, { through: 'ActorMovies' });
Actor.belongsToMany(Film, { through: 'ActorMovies' });

Director.hasMany(Film); 
Film.belongsTo(Director); 

Film.belongsToMany(Genre, { through: 'FilmGenres' });
Genre.belongsToMany(Film, { through: 'FilmGenres' });


module.exports = {
    Actor,
    Director,
    Film,
    Genre
};



