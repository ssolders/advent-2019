var fs = require('fs');

function calculate (value, moduleCombined = 0) {
  const fuel = Math.floor(value / 3) - 2
  if (fuel <= 0) {
    return moduleCombined
  } else {
    return calculate(fuel, moduleCombined + fuel)
  }
}

fs.readFile('./data.txt', 'utf8', function(err, contents) {
    let data = contents.split('\n') // create array
    let totalCombined = 0

    data.forEach(value => {
      totalCombined = totalCombined + calculate(value)
    })

    console.log('Result: ', totalCombined)

    if(err) { return console.log(err);}
});
 