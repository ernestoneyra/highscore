/* import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from '../data.js'
import Games from '../models/games.js */
const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const morgan = require('morgan')
const pool = require('../../db/index.js')
const Games = require('../../models/games.js')


const gamesRouter = express.Router();

gamesRouter.get(
  "/games",
  expressAsyncHandler(async (req, res) => {
    const games = await Games.findAll({});
    res.send(games);
  }) 
);

/* gamesRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Games.remove({});
    const listedGames = await Games.insertMany(data.games);
    res.send({ listedGames });
  })
); */

gamesRouter.get(
  "/:url_slug",
  expressAsyncHandler(async (req, res) => {
    
    const gameurl_slug = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const games = await Games.findOne({where: {url_slug: gameurl_slug}})
    if (games) {
      res.send(games);
    } else {
      res.status(404).send({ message: "Games Not Found" });
    }
  })
);

gamesRouter.post('/games', expressAsyncHandler(async (req, res) => {
  const {
    title,
    genre,
    description,
    release_year,
    image_url,
    url_slug
  } = req.body; 

  const games = await pool.query("INSERT INTO games VALUES($1)", games)
  res.json(games)
})) 

/* gamesRouter.post('/games', expressAsyncHandler(async (req, res) => {
  const {
    title,
    genre,
    description,
    release_year,
    image_url,
    url_slug
  } = req.body; 

  const games = await Games.create({
    title,
    genre,
    description,
    release_year,
    image_url,
    url_slug
  }
  )
  const createdGames = await games.save()
  res.send({ message: "Game created", games: createdGames });
})) */


/* gamesRouter.post(
  "/games",
  expressAsyncHandler(async (req, res) => {
    const games = new Games({
      title: "sample title",
      genre: "sample genre",
      description: "sample description",
      release_year: 0,
      image_url: "/images/p1.jpg",
      url_slug: "game-here"
    });
    const createdGames = await games.save();
    //passing the createdGames to frontend
    res.send({ message: "Game created", games: createdGames });
  })
); */

gamesRouter.put(
  "/url_slug",
  expressAsyncHandler(async (req, res) => {
    const gamesSlug = req.params.id;
    const games = await Product.findById(gamesSlug);
    if (games) {
      games.title = req.body.title;
      games.genre = req.body.genre;
      games.description = req.body.description;
      games.release_year = req.body.release_year;
      games.image_url = req.body.image_url;
      games.url_slug = req.body.url_slug;
      const updatedGames = await games.save();
      res.send({ message: "Games Updated", games: updatedGames });
    } else {
      res.status(404).send({ message: "Games Not Found" });
    }
  })
);

gamesRouter.delete(
  "/:title",
  expressAsyncHandler(async (req, res) => {
    const gameTitle = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const games = await Games.findOne({where: {title: gameTitle}})
    if (games) {
      const deleteGames = await games.remove();
      res.send({ message: "Games Deleted", games: deleteGames });
    } else {
      res.status(404).send({ message: "Games Not Found" });
    }
  })
);

function generateUrlSlug(title) {
  return title
      .replace("-", "")
      .replace(" ", "-")
      .toLowerCase();
}

module.exports = gamesRouter
//export default gamesRouter;
