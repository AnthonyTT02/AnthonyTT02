const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

require("./routes/gameRoute")(app);
require("./routes/developers")(app);
require("./routes/genreRoute")(app);
require("./routes/reviewRoute")(app);
require("./routes/statisticsRoute")(app);

const PORT = process.env.PORT || 8000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log("DB is syncronysed successfully.");
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error("DB sync error!:", error);
  });
