const express = require('express');
const app = express();

app.use(express.json()); 

require('./routes/users')(app); 

app.listen(8000, () => {
    console.log('Сервер запущен на http://localhost:8000');
});
