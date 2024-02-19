const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

// Importa las rutas para las palabras
const wordsRoutes = require('./routes/words');

// Usa las rutas en tu aplicación
app.use('/api/words', wordsRoutes);
// Configura CORS para permitir todas las solicitudes desde cualquier origen
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
