fs = require('fs')

export ReadMe();

function ReadMe(file){
    fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
}
