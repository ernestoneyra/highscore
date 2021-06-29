const express = require("express");
const cors = require("cors");
const expressAsyncHandler = require("express-async-handler");
const morgan = require("morgan");
const Players = require("../../models/players.js");

const playersRouter = express.Router();

///////////////GET////////////////
playersRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const players = await Players.findAll({});
    res.send(players);
  })
);

playersRouter.get(
  "/:fullname",
  expressAsyncHandler(async (req, res) => {
    //const firstName = req.params.firstname;

    const players = await Players.findOne({
      where: { fullname: req.params.fullname },
    });
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

    const players = await Players.findOne({ where: { id: playersId } });
    if (players) {
      res.send(players);
    } else {
      res.status(404).send({ message: "Players Not Found" });
    }
  })
);
///////////////////////////////////////////

/////////////////////POST////////////////
playersRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname; 
    const fullname = req.body.fullname
    const email = req.body.email;

    const players = new Players({
      firstname,
      lastname, 
      fullname,
      email,
    });
    const createdPlayers = await players.save();
    //passing the createdplayers to frontend
    res.send({ message: "Players created", players: createdPlayers });
    console.log('createdPlayers', createdPlayers)
  })
);
////////////////////////////////////////

////////////////////PUT//////////////
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
//////////////////////////////////////////

///////////////////DELETE//////////////////
playersRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const playersId = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const players = await Players.findOne({ where: { title: playersId } });
    if (players) {
      const deletePlayers = await players.remove();
      res.send({ message: "Players Deleted", players: deletePlayers });
    } else {
      res.status(404).send({ message: "Players Not Found" });
    }
  })
);
////////////////////////////////////////////

module.exports = playersRouter;
