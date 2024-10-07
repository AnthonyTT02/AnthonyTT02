const fs = require('fs');
const csv = require('csv-parser');
const { Developer, Genre, Game, Review, Statistics } = require('./models');
const sequelize = require('./config/database');

async function loadCSVData() {
  const gamesData = [];

  fs.createReadStream('./games.csv') 
    .pipe(csv())
    .on('data', (row) => gamesData.push(row))
    .on('end', async () => {
      try {
        await sequelize.sync();

        await Promise.all(gamesData.map(async (game) => {
          const [developer] = await Developer.findOrCreate({
            where: { name: game.developerName },
            defaults: { country: game.developerCountry },
          });

          const [genre] = await Genre.findOrCreate({ where: { name: game.genre } });

          const newGame = await Game.create({
            title: game.title,
            releaseDate: game.releaseDate,
            platform: game.platform,
            price: game.price,
            developerId: developer.id,
            genreId: genre.id,
          });

          if (game.reviewRating) {
            await Review.create({
              rating: game.reviewRating,
              comment: game.reviewComment,
              reviewer: game.reviewer,
              gameId: newGame.id,
            });
          }

          await Statistics.create({
            playCount: game.playCount || 0,
            averagePlayTime: game.averagePlayTime || 0.0,
            gameId: newGame.id,
          });
        }));

        console.log('Данные успешно загружены в базу данных.');
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    });
}

loadCSVData();
