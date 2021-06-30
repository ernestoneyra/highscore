const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const morgan = require("morgan");
const pool = require("../../db/index.js");
const Games = require("../../models/games.js");
const { Sequelize } = require("sequelize");

const gamesRouter = express.Router();

/////GET ALL GAMES///////
gamesRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const games = await Games.findAll({});

    res.send(games);
  })
);

////GET ONE GAME////////////
/* gamesRouter.get(
  "/:url_slug",
  expressAsyncHandler(async (req, res) => {
    const gameurl_slug = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const games = await Games.findOne({ where: { url_slug: gameurl_slug } });
    if (games) {
      res.json(games);
    } else {
      res.status(404).send({ message: "" });
    }
  })
); */

/* gamesRouter.get("/search", expressAsyncHandler( async (req, res) => {
  const  title  = req.query.q;

  const game = await Games.findAll({
    where: {
      title: {
        [Sequelize.Op.iLike]: `%${title}%`,
      }
      
    },
  })
  
    .then((game) => res.render("game", { game }))
    .catch((err) => res.status(404).send({ message: err }));
})); */

 gamesRouter.get('/search', expressAsyncHandler(async (req, res) => {

  const searchTerm = req.query.q;

    const games = await Games.findAll({
        where: {
           title: {
              [Sequelize.Op.iLike]: `%${searchTerm}%`
            }
          }
    });
    if (games) {
   res.send(games)
  
    }else{
      res.status(404).send({ message: "Games Not Found" });
    }

})) 

//////ADD GAME/////////////
gamesRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const title = req.body.title;
    const release_year = req.body.release_year;
    const description = req.body.description;
    const genre = req.body.genre;
    const image_url = req.body.image_url;

    const games = new Games({
      title,
      release_year,
      description,
      genre,
      image_url,
      url_slug: generateUrlSlug(title),
    });

    const createdGames = await games.save();
    res.send({ message: "Game created", games: createdGames });
    console.log("createdGames", createdGames);
  })
);

///////////UPDATE GAME/////////////////
gamesRouter.put(
  "/:url_slug",
  expressAsyncHandler(async (req, res) => {
    const gamesSlug = req.params.url_slug;
    const games = await Games.findOne({ where: { url_slug: gamesSlug } });
    if (games) {
      games.title = req.body.title;
      games.genre = "sample genre";
      games.description = req.body.description;
      //games.release_year = req.body.release_year;
      games.image_url = req.body.image_url;
      //games.url_slug = gamesSlug;
      const updatedGames = await games.save();
      res.send({ message: "Games Updated", games: updatedGames });
    } else {
      res.status(404).send({ message: "Games Not Found" });
    }
  })
);

////////////////DELETE GAME////////////////
gamesRouter.delete(
  "/:title",
  expressAsyncHandler(async (req, res) => {
    const slug = req.params.url_slug;

    //const games = await Games.findById(req.params.id);
    const games = await Games.findOne({ where: { url_slug: slug } });
    if (games) {
      const deleteGames = await games.remove();
      res.send({ message: "Games Deleted", games: deleteGames });
    } else {
      res.status(404).send({ message: "Games Not Found" });
    }
  })
);

function generateUrlSlug(title) {
  return title.replace("-", "").replace(" ", "-").toLowerCase();
}

module.exports = gamesRouter;
//export default gamesRouter;
