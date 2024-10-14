const sequelize = require('./config/database');
const { 
  createActor, 
  createDirector, 
  createFilm, 
  createGenre 
} = require('./CrudOper');
const associations = require('./associations'); 

sequelize.sync({ force: true }).then(async () => {
  console.log("Database & tables created!");

  
  await createActor('Leonardo DiCaprio');
  await createActor('Brad Pitt');
  await createActor('Scarlett Johansson');
  await createActor('Tom Hanks');
  await createActor('Meryl Streep');

  
  await createDirector('Christopher Nolan');
  await createDirector('Quentin Tarantino');
  await createDirector('Steven Spielberg');
  await createDirector('Martin Scorsese');


  await createGenre('Action');
  await createGenre('Drama');
  await createGenre('Comedy');
  await createGenre('Thriller');
  await createGenre('Sci-Fi');

 
  await createFilm('Inception', '2010-07-16', 1);  
  await createFilm('Pulp Fiction', '1994-10-14', 2); 
  await createFilm('The Shawshank Redemption', '1994-09-22', 3); 
  await createFilm('The Departed', '2006-10-06', 4); 
  await createFilm('Fight Club', '1999-10-15', 2); 
  await createFilm('Interstellar', '2014-11-07', 1); 

  console.log("Data successfully added!");
});

