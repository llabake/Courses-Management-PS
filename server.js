const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist/')));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, 'dist/index.html'));
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`)
});
