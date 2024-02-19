const express = require('express');
const router = express.Router();
const wordsController = require('../controllers/wordsController');

// Ruta para obtener todas las palabras
router.get('/', wordsController.getAllWords);

// Ruta para agregar una nueva palabra
router.post('/', wordsController.addWord);

module.exports = router;
