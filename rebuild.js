var fs = require('fs')
var path = require('path')
const Dist = 'dist'

var list = []
var dirCount = 1
function findFiles (entry, cb) {
  fs.readdir(entry, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      files.forEach(file => {
        var filePath = entry + '/' + file
        var stat = fs.statSync(filePath)
        if (stat.isFile()) {
          file.search(/\.(css|js|html|png|jpe?g)$/) > 0 && list.push(filePath)
        } else {
          dirCount++
          if (!fs.existsSync(filePath.replace('/' + Dist, ''))) {
            fs.mkdirSync(filePath.replace('/' + Dist, ''))
          }
          findFiles(filePath, cb)
        }
      })
      dirCount--
      if (dirCount === 0) {
        cb(list)
      }
    }
  })
}

findFiles(path.join(__dirname, './' + Dist), list => {
  list.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      fs.renameSync(filePath, filePath.replace('/' + Dist, ''))
    }
  })
  console.log('finish!')
})
