const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("this is working")
})


app.get('/words', (req, res, next) => {
  console.log(req)
    fetch(`http://app.linkedin-reach.io/words?difficulty=${req.query.difficulty}`)
    //
    //
      .then(response => response.text())
      // .then(console.log) //this breaks it
       .then(text => res.send(text))
       .catch(err => next(err));

        })


app.post('/register')

app.listen(process.env.PORT || 3000, () => {
  console.log("app is running")
})
