const Actor = require('./models/actor');
const Director = require('./models/director');
const Film = require('./models/film');
const Genre = require('./models/genre');


async function createActor(name) {
  return await Actor.create({ name });
}


async function getAllActors() {
  return await Actor.findAll();
}

r
async function updateActor(id, name) {
  const actor = await Actor.findByPk(id);
  if (actor) {
    actor.name = name;
    await actor.save();
  }
  return actor;
}


async function deleteActor(id) {
  const actor = await Actor.findByPk(id);
  if (actor) {
    await actor.destroy();
  }
}


async function createDirector(name) {
  return await Director.create({ name });
}


async function getAllDirectors() {
  return await Director.findAll();
}


async function updateDirector(id, name) {
  const director = await Director.findByPk(id);
  if (director) {
    director.name = name;
    await director.save();
  }
  return director;
}


async function deleteDirector(id) {
  const director = await Director.findByPk(id);
  if (director) {
    await director.destroy();
  }
}




async function createFilm(title, releaseDate, directorId) {
  return await Film.create({ title, releaseDate, DirectorId: directorId });
}


async function getAllFilms() {
  return await Film.findAll();
}


async function updateFilm(id, title, releaseDate) {
  const film = await Film.findByPk(id);
  if (film) {
    film.title = title;
    film.releaseDate = releaseDate;
    await film.save();
  }
  return film;
}


async function deleteFilm(id) {
  const film = await Film.findByPk(id);
  if (film) {
    await film.destroy();
  }
}


async function createGenre(name) {
  return await Genre.create({ name });
}


async function getAllGenres() {
  return await Genre.findAll();
}


async function updateGenre(id, name) {
  const genre = await Genre.findByPk(id);
  if (genre) {
    genre.name = name;
    await genre.save();
  }
  return genre;
}


async function deleteGenre(id) {
  const genre = await Genre.findByPk(id);
  if (genre) {
    await genre.destroy();
  }
}


module.exports = {
 
  createActor,
  getAllActors,
  updateActor,
  deleteActor,
  
 
  createDirector,
  getAllDirectors,
  updateDirector,
  deleteDirector,
  
 
  createFilm,
  getAllFilms,
  updateFilm,
  deleteFilm,
  
 
  createGenre,
  getAllGenres,
  updateGenre,
  deleteGenre,
};




