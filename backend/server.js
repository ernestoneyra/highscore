const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressAsyncHandler = require('express-async-handler')
const morgan = require('morgan')

const highscoresRouter = require('./routes/admin/highscoresRouter.js')
const gamesRouter = require('./routes/admin/gamesRouter.js')
const playersRouter = require('./routes/admin/playersRouter.js')


const app = express();
//middleware
app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))

//API
app.use("/api/games", gamesRouter);
app.use("/api/scores", highscoresRouter);
app.use('/api/players', playersRouter)




//ROUTES highscores
/* app.get('/seed', (req, res) => {
    
}) */


//

app.listen(5000, () => {
    console.log('server listening on port 5000')
})