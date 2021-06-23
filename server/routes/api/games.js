/* var express = require("express");
var router = express.Router();





//HTTP GET /api/products/:id
router.get("/:urlSlug", function (req, res, next) {
  const urlSlug = req.params.id; // (id) måste vara samma som ovan. Behöver inte vara id kan vara x, men måste vara samma

  const games = req.app.locals.games;

  const game = games.find((game) => game.urlSlug == urlSlug);

  res.json(game);
}); */