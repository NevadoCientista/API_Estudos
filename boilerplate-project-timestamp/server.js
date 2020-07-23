// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Tentativa 1
// 1
app.get( "/api/timestamp/:date_string?", (req, res) => {
  const dateInputed = req.params.date_string;

  // 4
  try{
    const dateValid = new Date( dateInputed );
    res.json({ unix: dateValid.getTime(), utc: dateValid.toUTCString() });
  }catch{ 
    // 5
    res.json({ "error": "Invalid Date" });
  } 
});

// 3
app.get( "/api/timestamp/" ,  (req, res) => {
  const nowDate = new Date();
  res.json( { unix: nowDate.getTime(), utc: nowDate.toUTCString() } );
});


