const express = require('express');
const { swaggerUi, swaggerDocs } = require('./swagger');
const app = express();

app.use(express.json()); 

require('./routes/users')(app); 
require('./routes/licenses')(app);
require('./routes/reports')(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(8000, () => {
    console.log('Сервер запущен на http://localhost:8000');
});
