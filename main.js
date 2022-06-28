fs = require('fs')

function ReadMe(file){
    fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
}
