var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

app.get('/calculator', function (req, res, next) {
  var result = calculate(req.query.x, req.query.y);
  res.send(result);
})

app.listen(3001, function () {
  console.log('Starting to listen in port 3000');
})

function calculate(x, y) {
  var result = parseInt(x) + parseInt(y);

  return {
    result: result,
    name: "Alfred",
    // result: 123,
  };
}