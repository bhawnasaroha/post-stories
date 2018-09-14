let express = require(express);
let app = express();

const data = require('../data/server');

// respond with file data when a GET request is made 
app.get('/getPosts', function (req, res) {
  res.send();
});