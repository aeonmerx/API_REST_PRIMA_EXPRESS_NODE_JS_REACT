const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para obtener todas las palabras
const getAllWords = async (req, res) => {
  try {
    const words = await prisma.word.findMany({
      include: {
        translation: true,
      },
    });
    res.json(words);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las palabras.' });
  }
};

// Controlador para agregar una nueva palabra
const addWord = async (req, res) => {
  const { word, translation } = req.body;
  try {
    const newWord = await prisma.word.create({
      data: {
        word,
        translation: {
          create: {
            word: translation,
          },
        },
      },
      include: {
        translation: true,
      },
    });
    res.json(newWord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar la palabra.' });
  }
};

module.exports = {
  getAllWords,
  addWord,
};
