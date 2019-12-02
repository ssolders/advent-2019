var fs = require('fs');
fs.readFile('./data.txt', 'utf8', function(err, contents) {
    const data = contents.split(',')
    data[1] = 12
    data[2] = 2

    for (var index = 0; index < data.length; index = index + 4) {
      const subSet = data.slice(index, index + 4)
      const calcCode = subSet[0]
      const p1 = subSet[1]
      const p2 = subSet[2]
      const p3 = subSet[3]

      const calc = {
        1: () => parseInt(data[p1]) + parseInt(data[p2]),
        2: () => parseInt(data[p1]) * parseInt(data[p2]),
        99: () => 'STOP'
      }

      if (calcCode) {
        const result = calc[calcCode]()
        if (result !== 'STOP') {
          data[p3] = result
        } else {
          console.log(data[0])
          break
        }
      }
    }
});
 