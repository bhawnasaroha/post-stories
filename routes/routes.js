let express = require(express);
let app = express();

const data = require('../data/server');

// respond with file data when a GET request is made 
// app.get('/getPosts', function (req, res) {
//   res.render('http://127.0.0.1:4000/');
// });

var __dirname = '/';
var db = {};
app.get('/data/db.json', (req, res) => {
  console.log(res);

  /* Just send the file */
  res.sendFile(path.join(__dirname, '/src/data', 'db.json'));
});