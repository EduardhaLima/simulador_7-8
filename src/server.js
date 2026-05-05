const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/m.routes');

const app = express();

connectDB();

app.use(express.json());
app.use(movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});