var fs = require('fs');

function calculate (value) {
  return Math.floor(value / 3) - 2
}
 
fs.readFile('./data.txt', 'utf8', function(err, contents) {
    let data = contents.split('\n')
    let combined = 0
    data.forEach(value => {
      combined = combined + calculate(value)
    })

    console.log('Result: ', combined)

    if(err) {
      return console.log(err);
    }
});
 