const games = require('../../server/db.json').games;
const platforms = require('../../server/db.json').platforms;

// Modelos de datos
const Game = {
  getAll: () => games,
  getById: (id) => games.find((game) => game.id === id),
  getByYear: (year)=> games.filter((game) => game.year === year),
  getYearsList: () => {
    const uniqueYearsSet = new Set(games.map((game) => game.year));
    const uniqueYearsArray = Array.from(uniqueYearsSet);
    return uniqueYearsArray;
  },
  create: (game) => {
    const newGame = { ...game, id: games.length + 1 };
    games.push(newGame);
    return newGame;
  },
  update: (id, updatedGame) => {
    const index = games.findIndex((game) => game.id === id);
    if (index !== -1) {
      games[index] = { ...games[index], ...updatedGame };
      return games[index];
    }
    return null;
  },
  delete: (id) => {
    const index = games.findIndex((game) => game.id === id);
    if (index !== -1) {
      const deletedGame = games.splice(index, 1);
      return deletedGame[0];
    }
    return null;
  },
};

const Platform = {
  getAll: () => platforms,
};

module.exports = { Game, Platform };
