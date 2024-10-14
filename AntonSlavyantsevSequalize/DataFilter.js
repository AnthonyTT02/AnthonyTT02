const { Film, Director, Genre, Actor } = require('./models');


const filterFilmsByDirector = async (directorName) => {
  return await Film.findAll({
    include: [{
      model: Director,
      where: { name: directorName }
    }]
  });
};


const filterFilmsByGenre = async (genreName) => {
  return await Film.findAll({
    include: [{
      model: Genre,
      where: { name: genreName }
    }]
  });
};


const filterFilmsByActor = async (actorName) => {
  return await Film.findAll({
    include: [{
      model: Actor,
      where: { name: actorName }
    }]
  });
};

module.exports = {
  filterFilmsByDirector,
  filterFilmsByGenre,
  filterFilmsByActor
};
