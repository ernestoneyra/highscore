const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Genre = require("../../models/genre.js");

const genreRouter = express.Router();

genreRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const genre = await Genre.findAll({});
    res.send(genre);
  })
);

module.exports = genreRouter;
