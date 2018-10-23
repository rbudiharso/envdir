const fs = require('fs')
const path = require('path')

const envdir = dir => {
  const defaultDir = dir || process.env.ENVDIR || '.env'

  const files = fs.readdirSync(path.join(__dirname, defaultDir))
  files
    .filter(file => {
      const stat = fs.statSync(path.join(__dirname, defaultDir, file))
      return stat.isFile()
    })
    .forEach(file => {
      const value = fs.readFileSync(path.join(__dirname, defaultDir, file))
      process.env[file] = value.toString().trim()
    })
}

module.exports = envdir
