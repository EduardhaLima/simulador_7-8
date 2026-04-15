const express = require('express');
const movieRoutes = require('./routes/m.routes');

let movies = [];
let lastId = 0; 

const app = express();

app.use(express.json());

app.use(movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});