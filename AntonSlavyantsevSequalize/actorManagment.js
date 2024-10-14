const { Film, Actor } = require('./models');


const addActorToFilm = async (filmId, actorId) => {
  try {
    const film = await Film.findByPk(filmId);
    const actor = await Actor.findByPk(actorId);

    if (film && actor) {
      await film.addActor(actor);
      console.log(`Actor ${actor.name} added to film ${film.title}`);
    } else {
      console.log('Film or actor not found');
    }
  } catch (error) {
    console.error('Error adding actor to film:', error);
  }
};


const removeActorFromFilm = async (filmId, actorId) => {
  try {
    const film = await Film.findByPk(filmId);
    const actor = await Actor.findByPk(actorId);

    if (film && actor) {
      await film.removeActor(actor);
      console.log(`Actor ${actor.name} removed from film ${film.title}`);
    } else {
      console.log('Film or actor not found');
    }
  } catch (error) {
    console.error('Error removing actor from film:', error);
  }
};

module.exports = {
  addActorToFilm,
  removeActorFromFilm
};
