// express for server-side methods
const express = require('express');
const bodyParser = require('body-parser');

// creates the application
const app = express();
// sets the port for the application
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

let idStart = 0;
const whirlydoos = [];

app.get('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  res.send(JSON.stringify(whirlydoos));
  res.status(200).send();
});

app.post('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  let request = req.body;
  let name = req.body.name;
  let skill = req.body.skill;
  let id = idStart;
  let datetime = getCurrentDateString();
  let whirly = {name:name, skill: skill, id: id, created_at: datetime};
  whirlydoos[id] = whirly;
  idStart++;
  res.id = id;
  res.send(JSON.stringify(whirly));
  res.status(201).send();
});

app.put('/api/whirlydoos/update/{id}', (req, res) => {
  /* Implement API Call */
  var exists = false;
  for(i in whirlydoos){
    if(i.id == req.params.id){
      i.skill = req.body.skill;
      res.id = i.id;
      let datetime = getCurrentDateString();
      let whirly = {name:req.body.name, skill: req.body.skill, id: req.params.id, created_at: datetime};
      res.send(JSON.stringify(whirly));
      res.status(200).send();
      var exists = true;
    }
  }
  if(!exists){
    let name = req.body.name;
    let skill = req.body.skill;
    let id = idStart;
    let datetime = getCurrentDateString();
    let whirly = {name:name, skill: skill, id: id, created_at: datetime};
    whirlydoos[id] = whirly;
    idStart++;
    res.id = id;
    res.send(JSON.stringify(whirly));
    res.status(201).send();
  }
});

// listen for requests made to get /api/hello and post /api/world
app.listen(port, () => console.log(`Listening on port ${port}`));

const dayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function getCurrentDateString(){
  let currentdate = new Date(); 
  let datetime = dayNames[currentdate.getDay()] + ", " 
                + currentdate.getDate() + " "
                + monthNames[currentdate.getMonth()] + " "
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + " "
                + "GMT";
  return datetime;
}