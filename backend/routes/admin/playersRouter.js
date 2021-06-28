
const express = require('express')
const cors = require('cors')
const expressAsyncHandler = require('express-async-handler')
const morgan = require('morgan')
const Players = require('../../models/players.js')


const playersRouter = express.Router();

playersRouter.get(
  "/players",
  expressAsyncHandler(async (req, res) => {
    const players = await Players.findAll({});
    res.send(players);
  })
);



playersRouter.get(
  "/:firstname",
  expressAsyncHandler(async (req, res) => {
    
    //const firstName = req.params.firstname;

    
    const players = await Players.findOne({where: {firstname: req.params.firstname}})
    if (players) {
      res.send(players);
    } else {
      res.status(404).send({ message: "Players Not Found" });
    }
  })
);

playersRouter.get(
    "/:id",
    expressAsyncHandler(async (req, res) => {
      
      const playersId = req.params.id;
  
      
      const players = await Players.findOne({where: {id: playersId}})
      if (players) {
        res.send(players);
      } else {
        res.status(404).send({ message: "Players Not Found" });
      }
    })
  );



playersRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const players = new Players({
      firstname: "sample firstname",
      lastname: "sample lastname",
      email: "sample email",
    });
    const createdPlayers = await players.save();
    //passing the createdplayers to frontend
    res.send({ message: "Players created", players: createdPlayers });
  })
);

playersRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const playersId = req.params.id;
    const players = await Product.findOne(playersId);
    if (players) {
      players.firstname = req.body.firstname;
      players.lastname = req.body.lastname;
      players.email = req.body.email;
      const updatedPlayers = await players.save();
      res.send({ message: "Players Updated", players: updatedPlayers });
    } else {
      res.status(404).send({ message: "Players Not Found" });
    }
  })
);

playersRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const playersId = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const players = await Players.findOne({where: {title: playersId}})
    if (players) {
      const deletePlayers = await players.remove();
      res.send({ message: "Players Deleted", players: deletePlayers });
    } else {
      res.status(404).send({ message: "Players Not Found" });
    }
  })
);

module.exports = playersRouter;

