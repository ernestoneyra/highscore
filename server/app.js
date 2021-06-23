const express = require("express");
const app = express();
const port = 5000;
var cors = require('cors')


const bodyParser = require("body-parser")

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


app.post("/scores",(req,res) => {
   /* res = {
    game: req.body.game,
    player: req.body.player,
    date: req.body.date,
    highscore: req.body.highscore,
    urlSlug: req.body.urlSlug
   
}  */
const score = req.body;
scores.push(score);
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(scores)
  res.json(scores)
});

let games = [
  {
    id: 1,
    game: "Tetris",
    genre: "Genre: Puzzle",
    urlSlug: "tetris",
    release_year: "Release Year: 1984",
    description:
      "Allows players to rotate falling blocks strategically to clear levels. ",
    imageUrl:
      "https://assets.partyking.org/img/products/1300/tetris-lampa-1.jpg",
  },
  {
    id: 2,
    game: "Pacman",
    genre: "Genre: Platform",
    urlSlug: "pacman",
    release_year: "Release Year: 1980",
    description:
      "The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called Power Pellets causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.",
    imageUrl: "https://thumbs.dreamstime.com/z/pacman-symboler-128515491.jpg",
  },
  {
    id: 3,
    game: "Asteroids",
    urlSlug: "asteroids",
    genre: "Genre: Shooter",
    release_year: "Relase Year: 1979",
    description:
      "The object of the game is to shoot and destroy the asteroids and saucers, while not colliding with either, or being hit by the saucers' counter-fire.",
    imageUrl:
      "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_350/MTc0MDExMjc3NTI4NTQxMDUx/asteroids-game.webp",
  },
];

let scores = [
  {
    id: 1,
    game: {
      id: 1,
      title: "Tetris",
    },
    player: "John Doe",
    date: "2019-01-01",
    highscore: "130 000",
    urlSlug: "tetris",
  },
  {
    id: 2,
    game: {
      id: 2,
      title: "Pacman",
    },
    player: "Jane Doe",
    date: "2019-02-02 ",
    highscore: "120 000",
    urlSlug: "pacman",
  },
  {
    id: 3,
    game: {
      id: 3,
      title: "Asteroids",
    },
    player: "Jan Doe",
    date: "2019-03-03",
    highscore: "200 000",
    urlSlug: "asteroids",
  },
];

app.get("/games", function (req, res, next) {
 
  res.json(games);
});

app.get("/scores", function (req, res, next) {
  
  res.json(scores);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

