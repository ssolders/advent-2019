var fs = require('fs');
const TARGET = 19690720
let data = null

fs.readFile('./data.txt', 'utf8', function(err, contents) {
    data = contents.split(',')
    for (var noun = 0; noun < 100; noun++) {
      for (var verb = 0; verb < 100; verb++) {
        if (compute(noun, verb) == TARGET) {
          console.log(noun, verb)
				}
      }
    }
    // console.log('Done with loop, result is: ', result)
})
function compute (noun, verb) {
  let memoryData = data.slice(0)
  for (let i = 0; i < memoryData.length; i += 4) {
    memoryData[1] = noun
    memoryData[2] = verb

    let op = memoryData[i]
    let num1 = memoryData[i + 1]
    let num2 = memoryData[i + 2]
    let dest = memoryData[i + 3]

    if (op == 1) {
      memoryData[dest] = parseInt(memoryData[num1]) + parseInt(memoryData[num2]);
    } else if (op == 2) {
      memoryData[dest] = parseInt(memoryData[num1]) * parseInt(memoryData[num2]);
    } else if (op == 99) {
      break;
    }
  }
  return memoryData[0]
}
 