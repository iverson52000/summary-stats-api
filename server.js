const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const calculators = require('./calculators');

const app = express();

app.use(cors());
app.use(express.json());

//test if server is working
app.get('/', (req, res) => { 
  res.send('it is working'); 
})

//FE will send post request
app.post('/', (req, resp) => {
  try {
    let array = req.body;
    console.log(array);
    results = [calculators.mean(array), calculators.median(array), calculators.mode(array)];
    resp.send(results);
  } catch (err) {
    resp.status(400).json('error occured');
  }
})


app.listen(3001, () => {
  console.log(`app is running on port 3001`);
})




