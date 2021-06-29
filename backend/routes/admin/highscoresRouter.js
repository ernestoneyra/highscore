const express = require('express')
const cors = require('cors')
const expressAsyncHandler = require('express-async-handler')
const morgan = require('morgan')
const Scores = require('../../models/scores.js')


const scoresRouter = express.Router();

///////////////GET////////////////
scoresRouter.get(
  "/",
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
///////////////////////////////////////////

/////////////////////POST////////////////
scoresRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const game = req.body.game
    const fullname = req.body.fullname
    const date = req.body.date
    const highscore = req.body.highscore

    const scores = new Scores({
      game,
      fullname,
      date,
      highscore,
      url_slug: generateUrlSlug(game),
    });
    const createdScores = await scores.save();
    //passing the createdscores to frontend
    res.send({ message: "Score created", scores: createdScores });
  })
);
///////////////////////////////////////////

////////////////////PUT//////////////
scoresRouter.put(
  "/:url_slug",
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
////////////////////////////////////////

///////////////////DELETE//////////////////
scoresRouter.delete(
  "/:title",
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
//////////////////////////////////////////

function generateUrlSlug(game) {
  return game.replace("-", "").replace(" ", "-").toLowerCase();
}

module.exports = scoresRouter
//export default gamesRouter;
