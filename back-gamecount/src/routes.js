const express = require("express");
const router = express.Router();
const { Game } = require("./models");

// Rutas para juegos
router.get("/games", (req, res) => {
  res.json(Game.getAll());
});

router.get("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const game = Game.getById(id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: "Juego no encontrado" });
  }
});

router.post("/games", (req, res) => {
  const newGame = req.body;
  const game = Game.create(newGame);
  res.status(201).json(game);
});

router.put("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedGame = req.body;
  const game = Game.update(id, updatedGame);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: "Juego no encontrado" });
  }
});

router.delete("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deletedGame = Game.delete(id);
  if (deletedGame) {
    res.json(deletedGame);
  } else {
    res.status(404).json({ error: "Juego no encontrado" });
  }
});

module.exports = router;
