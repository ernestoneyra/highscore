DROP TABLE IF EXISTS "games"; 

CREATE TABLE "games" (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(50) NOT NULL,
  genre VARCHAR(50),
  description VARCHAR(900) NOT NULL,
  release_year NUMERIC(4) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  url_slug VARCHAR(250) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (url_slug)
);

INSERT INTO "games" (title, genre, description, release_year, image_url, url_slug)
VALUES
('Tetris', 'Puzzle', 'Allows players to rotate falling blocks strategically to clear levels', 1984, 'https://assets.partyking.org/img/products/1300/tetris-lampa-1.jpg', 'tetris' ),
('Pacman', 'Paltform', 'The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called Power Pellets causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.', 1980, 'https://thumbs.dreamstime.com/z/pacman-symboler-128515491.jpg', 'pacman' ),
('Asteroids', 'Shooter', 'The object of the game is to shoot and destroy the asteroids and saucers, while not colliding with either, or being hit by the saucers counter-fire.', 1979, 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_350/MTc0MDExMjc3NTI4NTQxMDUx/asteroids-game.webp', 'asteroids');



DROP TABLE IF EXISTS "player";

CREATE TABLE "players" (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO "players" (firstname, lastname, email) 
VALUES
('John', 'Adams', 'jadams@gmail.com'),
('Jane', 'Doe', 'doejane@gmail.com'),
('Adam', 'Carter', 'cadam@gmail.com');


DROP TABLE IF EXISTS "scores";

CREATE TABLE "scores" (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  game VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  date VARCHAR(50) NOT NULL,
  highscore NUMERIC(50) NOT NULL,
  url_slug VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO "scores" (game, firstname, lastname, date, highscore, url_slug)
VALUES
('Tetris', 'John', 'Adams', '2019-01-01', 100000, 'tetris'),
('Pacman', 'Jane', 'Doe', '2019-02-02', 120000, 'pacman'),
('Asteroids', 'Adam', 'Carter', '2019-03-03', 130000, 'asteroids');

