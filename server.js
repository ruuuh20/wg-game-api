const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))


app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send("this is working")
// })


app.get('/words', (req, res, next) => {
    fetch('http://app.linkedin-reach.io/words?difficulty=2&count=20')
    //
    //
      .then(response => response.text())
      // .then(console.log) //this breaks it
       .then(text => res.send(text))
       .catch(err => next(err));
        // return res.send(wor)
        // console.log(wor)

      // .then(text => res.send(text))
    //
    // .catch((err) => {
    //     console.log(err)
    //     res.end()
    // })
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
        })


app.post('/register')

app.listen(3000, () => {
  console.log("app is running")
})


/*
/register --> POST = user
/profile
/image --> PUT
*/
