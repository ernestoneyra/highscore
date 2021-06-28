const express = require('express')
const cors = require('cors')
const expressAsyncHandler = require('express-async-handler')
const morgan = require('morgan')
const Scores = require('../../models/scores.js')


const scoresRouter = express.Router();

scoresRouter.get(
  "/scores",
  expressAsyncHandler(async (req, res) => {
    const scores = await Scores.findAll({});
    res.send(scores);
  })
);


scoresRouter.get(
  "/:url_slug",
  expressAsyncHandler(async (req, res) => {
    
    const gameurl_slug = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const scores = await Scores.findOne({where: {url_slug: gameurl_slug}})
    if (scores) {
      res.send(scores);
    } else {
      res.status(404).send({ message: "Scores Not Found" });
    }
  })
);

scoresRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const scores = new Scores({
      title: "sample title " + Date.now(),
      genre: "sample genre",
      description: "sample description",
      release_year: 0,
      image_url: "/images/p1.jpg",
      url_Slug: "game-here"
    });
    const createdScores = await scores.save();
    //passing the createdscores to frontend
    res.send({ message: "Score created", scores: createdScores });
  })
);

scoresRouter.put(
  "/url_slug",
  expressAsyncHandler(async (req, res) => {
    const scoresSlug = req.params.id;
    const scores = await Product.findById(scoresSlug);
    if (scores) {
      scores.game = req.body.game;
      scores.firstname = req.body.firstname;
      scores.lastname = req.body.lastname;
      scores.date = req.body.date;
      scores.highscore = req.body.highscore;
      scores.url_slug = req.body.url_slug;
      const updatedScores = await scores.save();
      res.send({ message: "Scores Updated", scores: updatedScores });
    } else {
      res.status(404).send({ message: "Scores Not Found" });
    }
  })
);

scoresRouter.delete(
  "/:game",
  expressAsyncHandler(async (req, res) => {
    const gameScore = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const scores = await Scores.findOne({where: {title: gameScore}})
    if (players) {
      const deleteScores = await scores.remove();
      res.send({ message: "Scores Deleted", scores: deleteScores });
    } else {
      res.status(404).send({ message: "Scores Not Found" });
    }
  })
);

module.exports = scoresRouter
//export default gamesRouter;
